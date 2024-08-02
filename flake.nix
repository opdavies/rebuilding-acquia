{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-21.11";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      inherit (pkgs) mkShell nodejs;
      inherit (pkgs.nodePackages) yarn;
    in
    {
      devShells.${system}.default = mkShell {
        buildInputs = [
          nodejs
          yarn
        ];
      };

      formatter.${system} = pkgs.nixfmt-rfc-style;
    };
}
