import { useToast } from "@/components/molecules/Toast";

const toast = useToast();

const COMMON_ERROR_MESSAGE = {
  999: "알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요.",
  400: "잘못된 요청입니다. 잠시 후 다시 시도해주세요.",
  401: "로그인이 만료되었습니다. 다시 로그인해주세요.",
  403: "요청하신 정보에 접근할 권한이 없습니다. 관리자에게 문의해주세요.",
  404: "요청하신 정보 또는 페이지를 찾을 수 없습니다. 문제가 계속될 경우 관리자에게 문의해주세요.",
  500: "서버에 일시적인 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.",
};

const commonHandler = () => {};

const defaultHandler = () => {
  toast(COMMON_ERROR_MESSAGE[999], "error");
};

const handler400 = () => {
  toast(COMMON_ERROR_MESSAGE[400], "error");
};
const handler401 = () => {
  toast(COMMON_ERROR_MESSAGE[401], "error");
};
const handler403 = () => {
  toast(COMMON_ERROR_MESSAGE[403], "error");
};
const handler404 = () => {
  toast(COMMON_ERROR_MESSAGE[404], "error");
};
const handler500 = () => {
  toast(COMMON_ERROR_MESSAGE[500], "error");
};

const defaultHandlers: Record<any, any> = {
  common: commonHandler,
  default: defaultHandler,
  400: {
    default: handler400,
  },
  401: {
    default: handler401,
  },
  403: {
    default: handler403,
  },
  404: {
    default: handler404,
  },
  500: {
    default: handler500,
  },
};

export const useApiError = (handlers?: any) => {
  const handleError = (error: any) => {
    const statusCode = String(error.response.status);

    if (handlers && handlers[statusCode]) {
      // 컴포넌트에서 상태 코드에 따라 직접 정의한 커스텀에러 실행
      handlers[statusCode].default();
    } else if (defaultHandlers[statusCode]) {
      // 커스텀 에러가 없을 경우 기본 에러 실행
      defaultHandlers[statusCode].default();
    } else {
      // 알 수 없는 에러
      defaultHandlers.default();
    }

    defaultHandlers.common();
  };

  return {
    handleError,
  };
};
