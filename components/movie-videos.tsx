import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";
const getVideo = async (id: string) => {
  console.log(`Fetching Data: ${Date.now()}`);
  // await new Promise((resolve)=>setTimeout(resolve,3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`http://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        ></iframe>
      ))}
    </div>
  );
}
