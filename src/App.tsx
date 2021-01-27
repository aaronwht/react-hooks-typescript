import { useEffect, useState } from 'react';
import './App.css';
import { Container, Col, Row, Table } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [comments, setComments]:any = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await window.fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await resp.json();
      setComments(data)
    })()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>Comments:</h1>
          <Table bordered={false} striped className='mt-3'>
            <tbody>
              {comments && comments.map((comment:any) => {
                return (
                  <>
                    <tr key={comment.id} className='mb-3'>
                      <td>{comment.name}</td>
                      <td>{comment.body}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
