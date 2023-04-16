import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

// 로그인한 사용자가 있는지 확인
// 그 사용자가 어드민 권한이 있는지 확인
//requireAdmin이 true인 경우-> 로그인상태와 어드민 권한도 가지고 있어야 함
//조건에 맞지 안으면 / 상위경로로 이동
//조건에 맞는 경우에만 전달된 children을 보여준다.

export default function ProtectedRoute({children, requireAdmin}) {
    const { user } = useUserContext();

    if (!user || (requireAdmin && !user.isAdmin)) {
      return <Navigate to='/' replace />;
    }

    return children;
  
}

