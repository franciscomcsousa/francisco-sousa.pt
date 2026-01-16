{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    tailwindcss_4
    autoprefixer
		wrangler
  ];
}

