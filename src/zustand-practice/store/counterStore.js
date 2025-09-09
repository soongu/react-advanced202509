import {create} from 'zustand';

// 중앙 상태 저장소 생성
export const useCounterStore
  = create((set) => ({

  // 전역관리할 상태값들을 배치
  count: 0,
  showCounter: true,

  // 상태값을 변경하는 액션함수들을 배치
  // set함수로 상태값을 변경할 수 있으며 콜백의 파라미터 state는 이전상태값 모음 객체를 의미
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  multiply: (amount) => set((state) => ({ count: state.count * amount })),
  toggle: () => set(state => ({ showCounter: !state.showCounter })),
}));