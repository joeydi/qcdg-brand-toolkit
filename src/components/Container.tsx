import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const styles = css`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const Container: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

export default Container;
