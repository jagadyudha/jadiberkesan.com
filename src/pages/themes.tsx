import { ThemeProps } from '@/lib/types';
import ThemePage from '@/components/pageComponents/themePage/themePage';

export type ThemesProps = {
  themes: ThemeProps[];
};

const Index = ({ themes }: ThemesProps) => {
  return <ThemePage themes={themes} />;
};

export default Index;

export async function getStaticProps() {
  const data = await (
    await fetch('https://jadiberkesancom-staging.up.railway.app/api/v1/themes')
  ).json();

  return {
    props: {
      themes: data.themes,
    },
  };
}
