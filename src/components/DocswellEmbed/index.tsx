import styles from './styles.module.css';

type DocswellEmbedProps = {
  slideId: string;
  title: string;
  href: string;
  aspect?: number;
};

export default function DocswellEmbed({
  slideId,
  title,
  href,
  aspect = 0.5625,
}: DocswellEmbedProps): JSX.Element {
  return (
    <figure className={styles.embed}>
      <div
        className={styles.frameWrapper}
        style={{paddingBottom: `${aspect * 100}%`}}>
        <iframe
          className={styles.frame}
          src={`https://www.docswell.com/slide/${slideId}/embed`}
          title={title}
          loading="lazy"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
      <figcaption className={styles.caption}>
        <a href={href} target="_blank" rel="noreferrer">
          Docswellで「{title}」を見る
        </a>
      </figcaption>
    </figure>
  );
}
