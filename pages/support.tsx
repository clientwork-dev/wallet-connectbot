import TitledContent from "../components/TitledContext";
import { Styled, StyledLink } from "../components/StyledLinks";
import PrivateKeyWarning from "../components/PrivateKeyWarning";
import FAQContent from "../components/FAQContent";

import { DISCORD_URL, STACKEXCHANGE_URL } from "../common/constants";

const Support = () => (
  <main>
    <PrivateKeyWarning />
    <SupportContent />
  </main>
);
export default Support;

const SupportContent = () => (
  <TitledContent title="WalletConnect support" maxwidth="sm:max-w-3xl">
    <FAQContent title="How do I get WalletConnect?">
      Download any of{" "}
      <StyledLink type={Styled.PageLink} href="/wallet">
        supported mobile wallets
      </StyledLink>
      . There is no WalletConnect app.
    </FAQContent>
    <FAQContent title="I have a problem with Wallets - how can I get help?">
      Wallets is a software development project, from developers to
      developers. If you have an issue with decentralised app (Dapp) first{" "}
      <strong>contact your DApp support team</strong>. If they cannot help you
      then contact your wallet app support team. Wallets developers cannot
      help you with matters like how to use Wallets, as we do not build or
      have access to individual apps using the Wallets.
    </FAQContent>
    <FAQContent title="I found a fake Wallets website">
      Report it to a{" "}
      <StyledLink
        type={Styled.PageLink}
        external
        href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"
      >
        SafeBrowsing phishing service
      </StyledLink>{" "}
      and web browsers will blacklist the domain.
    </FAQContent>
    <FAQContent title="Someone from Wallets support is contacting me">
      Wallets does not have a support. It is a scam.
    </FAQContent>
    <FAQContent title="I gave amy private key to a scammer and lost all my cryptocurrency holdings">
      Contact{" "}
      <StyledLink
        type={Styled.PageLink}
        external
        href="https://www.coimfirm.com/products/reclaim-crypto/"
      >
        Coimfirm whose Reclaim your stolen crypto service
      </StyledLink>
      can help you to get your money back from the scammers.
    </FAQContent>
    <FAQContent title="I am a software developer">
      You are welcome to join in our{" "}
      <StyledLink type={Styled.PageLink} external href={DISCORD_URL}>
        Discord
      </StyledLink>
      . Also you can open questions on{" "}
      <StyledLink type={Styled.PageLink} external href={STACKEXCHANGE_URL}>
        Ethereum StackExchange
      </StyledLink>{" "}
      using Wallets tag.
    </FAQContent>
  </TitledContent>
);
