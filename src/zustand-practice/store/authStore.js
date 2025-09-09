import {create} from 'zustand';
import {persist} from 'zustand/middleware';

// 인증 관련 상태값 중앙 관리
export const useAuthStore = create(
  persist(
    (set) => ({

      // 관리할 상태값
      isLoggedIn: false,

      // 상태변경 함수 (액션 함수)
      login: () => set(() => {
        return ({isLoggedIn: true});
      }),
      logout: () => set(() => ({isLoggedIn: false})),
    }),
    {
      name: 'auth', // localStorage Key
      // 절대 민감정보 (ex - token) 로컬스토리지에 저장하면 안됨
      partialize: (state) => ({isLoggedIn: state.isLoggedIn})
    })
);