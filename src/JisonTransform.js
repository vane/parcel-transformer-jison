import {Transformer} from '@parcel/plugin';
import jison from 'jison';

export default new Transformer({
  async transform({asset}) {
    const source = await asset.getCode();
    const parser = new jison.Jison.Parser(source);
    asset.type = 'js';
    asset.setCode(parser.generate());

    // Return the asset
    return [asset];
  }
});
