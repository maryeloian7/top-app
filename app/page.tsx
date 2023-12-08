"use client";
import { Button, Htag, P, Tag, Rating } from "@/components";
import { useEffect, useState } from "react";



export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() =>  {
    console.log('MMMM');
  }, [count]);

  return (
    <div>
      <Htag tag="h1">{count}</Htag>
      <Button appearance="primaty" arrow="right"  onClick={() => setCount(count + 1)}>Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <P fontsize="l">xkdjcdlkjvkfnvklfnvdsvsfvsfv</P>
      <P>xkdjcdlvklfnvdsvsfvsfv</P>
      <P fontsize="s">klfnvdsvsfvsfv</P>
      <Tag fontsize = "s" color = "ghost">ghost</Tag>
      <Tag fontsize = "m" color = "red">red</Tag>
      <Tag fontsize = "s" color = "primary">primary</Tag>
      <Tag fontsize = "s" color = "gren">primary</Tag>
      <Rating rating={3}></Rating>
    </div>
  );
}
