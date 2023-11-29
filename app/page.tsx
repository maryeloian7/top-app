import { Button, Htag } from "@/components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primaty" arrow="right">button</Button>
      <Button appearance="ghost" >Кнопка</Button>
    </div>
  );
}
