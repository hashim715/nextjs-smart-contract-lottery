import ManualHeader from "@/components/ManualHeader";
import Header from "@/components/Header";
import LotteryEntrance from "@/components/LotteryEntrance";
export default function Home() {
  return (
    <>
      <title>Smart Contract Lottery</title>
      <meta name="description" content="Our Smart Contract Lottery"></meta>
      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />
    </>
  );
}
