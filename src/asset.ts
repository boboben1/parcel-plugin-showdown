import * as path from 'path';

import { Asset } from 'parcel-bundler';

import Showdown from 'showdown';

class MarkdownAsset extends Asset {
  public type = 'html';
  private converter = new Showdown.Converter();
  protected contents: string;
  constructor(name, pkg, options) {
    super(name, pkg, options);
  }

  public async generate() {
    const html = this.converter.makeHtml(this.contents);
    return [
      {
        type: 'html',
        value: html,
      },
    ];
  }
}

export = MarkdownAsset;
