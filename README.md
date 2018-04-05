Number Formatter
=========

A small library that adds sanitizes homoglyph ridden JSON and strings

## Installation

  `npm install de-homoglyph`

## Usage

    const deglyph = require('de-homoglyph');

    const badText = "Ѕuprеmе®/Thе North Fаcе® Mеtаllic Mountаin Βib";
    (view the source for this page if you think that that uses basic latin glyphs...)

    deglyph.deHomoglyph(badText);

Output should be `Supreme®/The North Face® Metallic Mountain Bib`

    deHomoglyphJSON expects a valid JSON object
    const badJSON = {'tryingtobeclever': badText}
    deglyph.deHomoglyphJSON(json)
    
Output should be `{ 'tryingtobeclever': 'Supreme®/The North Face® Metallic Mountain Bib' }`
  

