{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.tailwindcss_4      # Tailwind v4 CLI from Nix
    pkgs.autoprefixer
  ];
}

