import { BaseQueryApi } from "@reduxjs/toolkit/query";


export type TError = {
    data: {
      message: string;
      stack: string;
      success: boolean;
    };
    status: number;
  };

  export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };


  type TData <T>={
    data: T;
    meta?: TMeta;
  }


export type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message: string;
    data: TData<T>
  };
  
  export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
