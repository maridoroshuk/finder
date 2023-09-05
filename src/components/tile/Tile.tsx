import cn from 'components/tile/Tile.module.scss';

export const Tile = ({ tile: { title, image, url } }: TileProps) => {
  return (
    <a className={cn.tile} href={url} target="_blank" rel="noreferrer">
      <img src={image} />
      <h3 className={cn.title}>{title}</h3>
    </a>
  );
};
