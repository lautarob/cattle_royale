import { useEffect, useState } from "react";
import { findIndex } from 'lodash';

import ImagePicker from "./components/imagePicker";
import StartNew from "./components/new";
import Results from "./components/results";
import { Entity } from "./models/entity";
import Result from "./models/result";
import { getHits } from "./services/api";

const option1:Entity = {
  "id": 192976,
  "pageURL": "https://pixabay.com/photos/cattle-animal-pasture-192976/",
  "type": "photo",
  "tags": "cattle, animal, pasture",
  "previewURL": "https://cdn.pixabay.com/photo/2013/10/09/02/26/cattle-192976_150.jpg",
  "previewWidth": 150,
  "previewHeight": 99,
  "webformatURL": "https://pixabay.com/get/g76d52873deceea4eb0b4f6372a1df56ba1d78a0374be4ec3e97ae071f13dc78ae448c95f6acdd678f35d463aa3c63af3_640.jpg",
  "webformatWidth": 640,
  "webformatHeight": 426,
  "largeImageURL": "https://pixabay.com/get/g5bec46e058a9315fcad131a370a6cf7f96c9ff5f96799d3c2a831cf1037b5e1d465c67d3d1d433ee434440b78cb0f1416eb17a7ba3fea0e43e004555fd083952_1280.jpg",
  "imageWidth": 1920,
  "imageHeight": 1280,
  "imageSize": 476750,
  "views": 153215,
  "downloads": 56830,
  "favorites": 637,
  "likes": 641,
  "comments": 76,
  "user_id": 64960,
  "user": "FrankWinkler",
  "userImageURL": "https://cdn.pixabay.com/user/2013/10/10/13-56-37-52_250x250.jpg"
};

  const option2:Entity = {
    "id": 431729,
    "pageURL": "https://pixabay.com/photos/cow-animal-pasture-cattle-431729/",
    "type": "photo",
    "tags": "cow, animal, pasture",
    "previewURL": "https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_150.jpg",
    "previewWidth": 150,
    "previewHeight": 118,
    "webformatURL": "https://pixabay.com/get/gf4c1b787b88f75c875d55b48908b024631f64379ea0758f25df3db32175a35e282abef4fef24a31438d1a6dd0ecd70ef_640.jpg",
    "webformatWidth": 640,
    "webformatHeight": 504,
    "largeImageURL": "https://pixabay.com/get/g35701853be6e0445c538c9334385ba9c1a72627b2871f9b068fae8a1f6701b93e7d96ca01f8ae01c4175a2479873eb5faa037ded6eec3d8cec577c87dc571f29_1280.jpg",
    "imageWidth": 2911,
    "imageHeight": 2295,
    "imageSize": 3258747,
    "views": 88821,
    "downloads": 30790,
    "favorites": 446,
    "likes": 351,
    "comments": 70,
    "user_id": 401149,
    "user": "fotshot",
    "userImageURL": "https://cdn.pixabay.com/user/2014/08/25/00-10-01-561_250x250.jpg"
  };

const results:Array<Result> = [
  {
    entity: option1,
    winRate: 80,
    matchups: 9
  }
]

let hits:Array<Entity> = [];

function getRandomArbitrary(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {

  const [results, setResults] = useState<Array<Result>>([])
  const [option1, setOption1] = useState<Entity|null>(null);
  const [option2, setOption2] = useState<Entity|null>(null);

  const getPossibleMatches = async(q:string) => {
    const response = await getHits(q);
    hits = response.data.hits;
    getNewMatch();
  }

  const getNewMatch = () => {
    const option1Number = getRandomArbitrary(1, hits.length - 1);
    const option2Number = getRandomArbitrary(1, hits.length - 1);
    console.log("option1Number", option1Number, option2Number)
    setOption1(hits[option1Number]);
    setOption2(hits[option2Number]);
  }

  useEffect(() => {
    getPossibleMatches('cows')
  }, []);

  const onOptionSelected = (entity:Entity) => {
    getNewMatch()
    const index = findIndex(results, (result:Result) => result.entity.id === entity.id);

    if(index === -1){
      results.push({
        entity,
        winRate: 0,
        matchups: 1,
      });
    }else{
      results[index].matchups++;
    }
    setResults(results);

  }

  return (
    <div>
      { !!option1 && !!option2 && <ImagePicker option1={option1} option2={option2} onOptionSelected={onOptionSelected}/>}
      <Results results={results} />
      <StartNew />
    </div>
  );
}

export default App;
