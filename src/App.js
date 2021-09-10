import { Avatar, Heading, Text } from "@chakra-ui/react";
import { MainLayout, LinksLayout, ProfileLayout } from "./components/layout";
import { profileInfo, links } from "./data";
import { Link } from "./components/links";

function App() {
  return (
    <MainLayout>
      {/* Profile Information */}
      <ProfileLayout>
        <Avatar src={profileInfo.photo} size="xl" />
        <Heading>{profileInfo.name}</Heading>
        <Text>{profileInfo.bio}</Text>
      </ProfileLayout>

      {/* Custom Links */}
      <LinksLayout>
        {links.map((l, i) => (
          <Link key={i} site={l.site} link={l.link} color={l.color} />
        ))}
      </LinksLayout>
    </MainLayout>
  );
}

export default App;
