terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

resource "aws_s3_bucket" "rebuilding-acquia" {
  bucket = "rebuilding-acquia"
}

resource "aws_s3_bucket_acl" "rebuilding-acquia" {
  acl    = "private"
  bucket = aws_s3_bucket.rebuilding-acquia.id
}

locals {
  s3_origin_id = "rebuilding-acquia"
}

resource "aws_cloudfront_origin_access_control" "rebuilding-acquia" {
  name                              = "rebuilding-acquia"
  description                       = "rebuilding-acquia"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.rebuilding-acquia.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.rebuilding-acquia.id
    origin_id                = local.s3_origin_id
  }

  comment             = "Rebuilding Acquia - Tailwind CSS example"
  default_root_object = "index.html"
  enabled             = true
  is_ipv6_enabled     = true

  aliases = ["rebuilding-acquia.oliverdavies.uk"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    default_ttl            = 3600
    max_ttl                = 86400
    min_ttl                = 0
    viewer_protocol_policy = "allow-all"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      locations        = ["US", "CA", "GB"]
      restriction_type = "whitelist"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_acm_certificate" "cert" {
  domain_name       = "rebuilding-acquia.oliverdavies.uk"
  provider          = aws.us-east-1
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
