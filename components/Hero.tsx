import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../lib/constants";
import "@zkmelabs/widget/dist/style.css";
import { fetchAccessToken } from "../lib/fetchZkMeAccessToken";
import { launchZkMeWidget } from "../lib/launchZkMeWidget";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Hero() {
  const account = useActiveAccount();

  return (
    <>
      <div
        className={
          "md:w-4/5 m-auto flex justify-center items-center flex-col gap-8"
        }
        style={{ minHeight: "calc(100vh - 128px)" }}
      >
        <div className={"hero-text text-center"}>
          <div className="flex flex-col items-center">
            <h1 className="text-[13vw] leading-tight pt-32 md:pt-0">
              Uniting humanity
            </h1>
            <p className="text-[#555] px-6 pt-4 pb-24 lg:pb-4 max-w-[640px]">
              Join the World Association, get your basic income, and experiment
              with global democracy.
            </p>
          </div>
        </div>
        <div>
          <div className="grid gap-6 lg:grid-cols-3 justify-center content-stretch xl:mt-4">
            <div className="w-[100vw] lg:w-auto max-w-[406px] mt-4 lg:mt-0 px-6 lg:px-0">
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader>
                    <CardTitle>Join</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-content text-[14px] text-[#555]">
                      Join us and get your basic income simply by proving that
                      you are a real and unique human.
                    </p>
                  </CardContent>
                </div>
                <CardFooter>
                  {account ? (
                    <Button
                      className="w-full h-[48px] text-[14px] bg-[#005563] rounded-full"
                      onClick={() =>
                        launchZkMeWidget(account.address, fetchAccessToken)
                      }
                    >
                      Prove your personhood
                    </Button>
                  ) : (
                    <ConnectButton
                      client={client}
                      chain={chain}
                      theme={"light"}
                      connectButton={{
                        label: "Prove your personhood",
                        style: {
                          width: "100%",
                          height: "48px",
                          fontSize: "14px",
                          backgroundColor: "#005563",
                          color: "#fcfcfc",
                          borderRadius: "3rem",
                        },
                      }}
                      connectModal={{ showThirdwebBranding: false }}
                    />
                  )}
                </CardFooter>
              </Card>
            </div>
            <div className="w-[100vw] lg:w-auto max-w-[406px] px-6 lg:px-0">
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader>
                    <CardTitle>Vote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-content text-[14px] text-[#555]">
                      Create and vote on proposals addressing humanity's most
                      pressing global challenges.
                    </p>
                  </CardContent>
                </div>
                <CardFooter>
                  <Button
                    className="w-full h-[48px] text-[14px] rounded-full"
                    onClick={() =>
                      window.open(
                        "https://snapshot.org/#/worldassociation.eth",
                        "_blank"
                      )
                    }
                  >
                    Explore proposals
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="w-[100vw] lg:w-auto max-w-[406px] px-6 lg:px-0">
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader>
                    <CardTitle>Contribute</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-content text-[14px] text-[#555]">
                      Help us improve the World Association and get rewarded in
                      our digital currency.
                    </p>
                  </CardContent>
                </div>
                <CardFooter>
                  <Button
                    className="w-full h-[48px] text-[14px] rounded-full"
                    onClick={() =>
                      window.open(
                        "https://contribute.worldassociation.org",
                        "_blank"
                      )
                    }
                  >
                    Discover opportunities
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
