/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #쉬움 #tuple

  ### 질문

  배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

  예시:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > GitHub에서 보기: https://tsch.js.org/18/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 이전 14번 문제 답을 보다가 T['length']라는걸 쓰길래 바로 작성할 수 있었음
type WrongLength<T extends any[]> = T['length']

// 그런데 이 경우 제네릭에 오류가 났음
// as const로 선언된 타입은 readonly이기 때문에 readonly 붙여줘야 함
// as const는 그 값이 가진 타입이라는 넓은 범위가 아닌 그 리터럴 값을 타입으로 지정
const a = ['tesla', 'model 3', 'model X', 'model Y'] 
type TypeA = typeof a
// string[]

const b = ['tesla', 'model 3', 'model X', 'model Y'] as const
const TypeB = typeof b
// readonly ["tesla", "model 3", "model X", "model Y"]
// 리터럴 타입으로 만들며 읽기 전용으로 만들기 때문에 readonly가 필요한것

type Length<T extends readonly any[]> = T['length']

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18/answer/ko
  > 정답 보기: https://tsch.js.org/18/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
