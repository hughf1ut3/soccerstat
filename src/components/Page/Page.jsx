import './Page.css';
import React, { useEffect, useState } from 'react';
import getPageList from '../../api/getPageList';
import PageItems from './PageItems';
import SearchFilter from '../Common/SearchFilter/SearchFilter';
import Paginator from '../Common/Paginator/Paginator';
import ErrorPage from '../Info_pages/ErrorPage';
import WarnPage from '../Info_pages/WarnPage';

import Loader from '../Common/Loader/Loader';

function Page({ path }) {
  const itemsPerPage = 12;// кол-во элементов на странице
  const [data, setData] = useState([]);// исходные данные
  const [loading, setLoading] = useState(false);// состояние загрузки
  const [currentPage, setCurrentPage] = useState(1);// номер текущей страницы
  const [filterList, setFilterList] = useState([]);// отфильтрованный список
  const [err, setErr] = useState(false);// флаг ошибки
  const [notEmpty, setNotEmpty] = useState(false);// флаг строки поиска

  useEffect(() => {
    getPageList(
      path,
      setLoading,
      setErr,
      setData,
    );
  }, [path]);

  useEffect(() => { setCurrentPage(1); }, [path]);

  if (err) {
    return (
      <ErrorPage data={data} />
    );
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <div className="filterBar">
      <SearchFilter
          data={data}
          setCurrentPage={setCurrentPage}
          setFilterList={setFilterList}
          setNotEmpty={setNotEmpty}
        />
      </div>
      {!filterList.length
        ? <WarnPage /> : (
          <PageItems
            page={filterList}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            path={path}
          />
        )}
      <Paginator
        perPage={itemsPerPage}
        total={filterList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

  );
}
export default Page;
