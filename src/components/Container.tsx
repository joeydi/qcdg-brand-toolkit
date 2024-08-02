import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const styles = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${fluid(20, 60, SM, XXL)};
`;

function Container({ children, className }) {
  return (
    <div css={styles} className={className}>
      {children}
    </div>
  );
}

export default Container;
