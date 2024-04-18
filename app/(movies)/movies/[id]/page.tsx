import { Metadata } from "next";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
interface IParams {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: IParams) {
   const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Detail({
  params: { id },
}: IParams) {
  /**
 * 
 * 
이 표현식은 JavaScript의 객체 비구조화 할당과 TypeScript의 타입 어노테이션을 함께 사용한 것입니다. 이 코드는 보통 Node.js나 Express 등의 웹 개발에서 라우팅을 정의할 때 사용될 수 있습니다.

여기서 중요한 것은 TypeScript의 타입 어노테이션이며, 비구조화 할당 구문입니다.

{ params: { id } }: 이 부분은 JavaScript의 객체 비구조화 할당입니다. 이 표현은 객체 안에 있는 params 객체를 가져와서 그 안에 있는 id 속성의 값을 추출하여 id라는 변수에 할당합니다. 예를 들어, const { params: { id } } = someObject;와 같이 사용될 수 있습니다. 이 경우 someObject.params.id 값이 id 변수에 할당됩니다.

: { params: { id: string } }: 이 부분은 TypeScript의 타입 어노테이션입니다. 여기서는 객체 구조를 정의하고 있습니다. 이 객체는 params라는 속성을 갖는데, 이 params 속성은 또 다시 객체를 값으로 갖습니다. 그 안에는 id라는 속성이 있으며, 이 id 속성의 타입은 string입니다.

이 표현식은 주로 TypeScript와 함께 사용되며, 주어진 객체가 이러한 구조를 가지고 있는지를 검사하거나, 해당 타입을 명시적으로 선언하기 위해 사용될 수 있습니다. */
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
