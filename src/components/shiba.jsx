import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";

function Shiba() {
  const [shibaGifs, setShibaGifs] = useState([]);
  const [currentGifUrl, setCurrentGifUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetRandomShibaGifs();
  }, []);

  const RandomNum = () => {
    return Math.floor(Math.random() * 50);
  };

  const GetRandomShibaGifs = async () => {
    const { data } = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=shiba`
    );

    setShibaGifs(data);

    const randomUrl = data.data[RandomNum()].images["original"].url;

    setCurrentGifUrl(randomUrl);
  };

  const PickRandomShibaGif = () => {
    setLoading(true);

    const randomUrl = shibaGifs.data[RandomNum()].images["original"].url;

    setCurrentGifUrl(randomUrl);

    setLoading(false);
  };

  return (
    <section className="gif-generator">
      <img src={currentGifUrl} alt="Random shiba inu gif" />
      <Button
        variant="primary"
        onClick={() => {
          PickRandomShibaGif();
        }}
      >
        {loading && (
          <Spinner
            as="span"
            variant="light"
            size="sm"
            role="status"
            aria-hidden="true"
            animation="border"
          />
        )}
        {loading ? "Loading..." : "Random Shiba"}
      </Button>
    </section>
  );
}

export default Shiba;
