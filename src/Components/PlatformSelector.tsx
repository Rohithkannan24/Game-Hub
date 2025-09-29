import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatform";
import { platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: platform) => void;
  selectedPlaform: platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlaform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlaform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
