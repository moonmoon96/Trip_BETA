import axios from 'axios';
import { getCookie, removeCookie, setCookie } from './Cookie';

    

    const refreshAPI = axios.create({
      baseURL: "http://172.16.1.102:8080",
      headers: {
        "Content-Type": "application/json",
        "Access": `${localStorage.getItem('access')}`
      } 
    });

    refreshAPI.interceptors.response.use(
      // 성공적인 응답 처리
      response => {
        console.log('Starting Request', JSON.stringify(response))
        return response;
      },
      async error => {
        const originalConfig = error.config; // 기존에 수행하려고 했던 작업
        const response = error.response; // 에러 응답
        if (response) { // 응답이 존재하는지 확인
          const msg = response.data.code; // error msg from backend
          const status = response.status; // 현재 발생한 에러 코드
          console.log(status);
          // access_token 재발급
          if (status === 401 ) {
            if(msg == 1) {
               console.log("토큰 재발급 요청");
              try {
                const res = await axios.post(
                  '/reissue',{},
                  {headers: {
                    Authorization: `${localStorage.getItem('access')}`,
                    Refresh: `${getCookie('refresh')}`,
                  }},
                );
                // 새 토큰 저장
                localStorage.setItem("access", res.headers.authorization);
                setCookie("refresh", res.headers.refresh);
    
                // 새로 응답받은 데이터로 토큰 만료로 실패한 요청에 대한 인증 시도 (header에 토큰 담아 보낼 때 사용)
                originalConfig.headers["authorization"]="Bearer "+res.headers.authorization;
                originalConfig.headers["refresh"]= res.headers.refresh;
    
                console.log("New access token obtained.");
                // 새로운 토큰으로 재요청
                return refreshAPI(originalConfig);
              } catch (refreshError) {
                console.error('An error occurred while refreshing the token:', refreshError);
              }
            } else {
              localStorage.clear();
              removeCookie('refresh');
              window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
            }
          } else if(status == 400 || status == 404 || status == 409) {
            window.alert(msg); 
            console.log(msg);
          }
        } else {
          console.error('No response received:', error);
        }
        // 다른 모든 오류를 거부하고 처리
        return Promise.reject(error);
      },
    );
    
    export default refreshAPI;