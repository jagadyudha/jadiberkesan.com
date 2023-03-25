import React from 'react';
import { GetServerSideProps } from 'next';
import Loading from '@/components/sharedComponents/loading';

const MigrateLink = ({ slug }: { slug: string }) => {
  React.useEffect(() => {
    window.location.assign(`https://${slug}.jadiberkesan.com`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {slug}
      <Loading variants='page' state={true} />
    </>
  );
};

export default MigrateLink;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query;
  // Call external API from here directly

  return {
    props: { slug: slug.redirect },
  };
};
