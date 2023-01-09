import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../../');

moduleAlias.addAliases({
    '@app': path.join(files, 'app'),
    '@helpers': path.join(files, 'helpers'),
    '@infra': path.join(files, 'infra'),
    '@test': path.join(files, 'test'),
});
