import './infoPages.css';
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function WarnPage() {
  return (
    <Alert variant="info">
      <Alert.Heading>Внимание</Alert.Heading>
      <p>
        По вашему запросу ничего не найдено. 
      </p>
      <hr/>
      <p class="mb-0">
      Попробуйте изменить поисковой запрос или перейти на другую страницу.
      </p>
    </Alert>
  );
}
export default WarnPage;
