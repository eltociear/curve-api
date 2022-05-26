import { fn } from 'utils/api';
import getSidechainFactoryAPYs from 'pages/api/getFactoryAPYs/_sidechains';

export default fn(async () => getSidechainFactoryAPYs({ blockchainId: 'moonbeam' }), {
  maxAge: 30, // 30s
});