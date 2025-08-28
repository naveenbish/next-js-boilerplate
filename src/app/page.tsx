'use client'
import HeaderComponent from "@/components/headerComponent";
import { Counter } from "@/features/counter/Counter";
import Pokemon from "@/features/pokemon/Pokemon";

export default function Home() {
  return (
    <div className="py-10">
      <HeaderComponent />
      <Counter />
      <Pokemon />
    </div>
  )
}
