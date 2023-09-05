interface Tile {
  title: string;
  image: string;
  url: string;
}

interface TileProps {
  tile: Tile;
}

interface ShowMoreButtonProps {
  handleClick: () => void;
  collapsed: boolean;
  children: string;
}
