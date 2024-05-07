
import { client } from "@/app/client"
import { chain } from "@/app/chain";
import { ConnectEmbed } from "@/app/Thirdweb";
import { Staking } from "@/components/Staking";
export default function Home() {
  return (
  <>

  <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking/>
  </>
  );
}
