import { DnaBox } from './Loader.styled';
import { Dna } from 'react-loader-spinner';

function LoaderDna() {
  return (
    <DnaBox>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </DnaBox>
  );
}

export default LoaderDna;
