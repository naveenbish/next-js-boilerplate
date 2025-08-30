'use client'
import HeaderComponent from "@/components/headerComponent";
import { Counter } from "@/features/counter/Counter";
import Pokemon from "@/features/pokemon/Pokemon";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="py-10">
      <Container>
        <HeaderComponent />
        <Counter />
        <Pokemon />
      </Container>
    </div>
  )
}
