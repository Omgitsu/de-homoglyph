Number Formatter
=========

A small library that adds sanitizes homoglyph ridden JSON and strings

## Installation

  `npm install de-homoglyph`

## Usage

    const deHomoglyph = require('de-homoglyph').deHomoglyph;
    const badText = "Ѕuprеmе®/Thе North Fаcе® Mеtаllic Mountаin Βib";
    deHomoglyph(badText);
    
  Output should be `Supreme®/The North Face® Metallic Mountain Bib`

