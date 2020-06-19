import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdDelete, MdFileUpload } from 'react-icons/md';
import PropTypes from 'prop-types';
import SystemWeb from '../_layouts/systemWeb';
import api from '../../services/api';

import { ProductForm, Panel, FormImagens, Faq, TableContainer } from './style';

export default function MainSystem({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labels, setLabels] = useState('');
  const [plataform, setPlataform] = useState('');
  const [price, setPrice] = useState('');
  const [available = true, setAvailable] = useState(Boolean);
  const [faqs, setFaqs] = useState([]);
  const [images, setImages] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  // console.tron.warn(faqs);

  useEffect(() => {
    async function load() {
      const { id } = match.params;

      const response = await api.get(`/products/${id}/detail`);
      const { data } = response;

      setTitle(data.title);
      setDescription(data.description);
      setLabels(data.labels);
      setPlataform(data.plataform);
      setAvailable(data.available);
      setFaqs(data.faqs);
      setImages(data.images);
      setPrice(data.price);

      const radio = document.querySelectorAll('.availabel');
      const checked = data.available;
      // eslint-disable-next-line no-unused-expressions
      checked
        ? radio[0].setAttribute('checked', '')
        : radio[1].setAttribute('checked', '');
    }
    load();
  }, [match.params]);

  function handleAddFaqs() {
    if (answer && question) {
      setFaqs([...faqs, { answer, question }]);
      setQuestion('');
      setAnswer('');
    }
  }
  async function handleDeleteFaq(faq, index) {
    const newFaqs = faqs.filter((item, i) => {
      return i !== index;
    });
    await api.delete(`/faq/${faq.id}`);
    setFaqs(newFaqs);
  }
  async function handleSaveFaq(id) {
    const data = {
      product_id: id,
      faqs: faqs.filter(f => {
        if (!f.id) {
          return f;
        }
        return null;
      }),
    };

    await api.post('/relateFaqProduct', data);
  }
  async function handleRelatedImages(id) {
    const data = {
      product_id: id,
      images,
    };

    await api.post('/relateProductImage', data);
  }

  async function handleSaveProduct() {
    const idParams = match.params.id;

    const data = {
      title,
      description,
      labels,
      plataform,
      available,
      price,
    };

    if (idParams) {
      await api.put(`/products/${idParams}`, data);
      handleSaveFaq(idParams);
      handleRelatedImages(idParams);
      toast.success('sucesso');
      return;
    }
    const response = await api.post('/products', data);
    const { id } = response.data;

    handleSaveFaq(id);
    handleRelatedImages(id);
    toast.success('sucesso');

    setTitle('');
    setDescription('');
    setAvailable(true);
    setLabels('');
    setPlataform('');
    setFaqs([]);
    setImages([]);
    setPrice('');
  }
  async function handleAddImage(e) {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const result = await api.post('/files', formData);
    if (images.length === 0) {
      await api.put(`/files/${result.data.id}`);
    }

    setImages([...images, result.data]);
  }
  async function handleDeleteImage(file, index) {
    const newImages = images.filter((item, i) => {
      return i !== index;
    });

    await api.delete(`/files/${file.id}`, {
      headers: {
        'Content-Typer': `multipart/form-data`,
      },
    });

    setImages(newImages);
  }
  return (
    <SystemWeb>
      <Panel>
        <div className="content">
          <ProductForm>
            <input
              type="text"
              onChange={e => setTitle(e.target.value)}
              placeholder="Informe o titulo de produto"
              value={title}
            />
            <input
              type="text"
              onChange={e => setLabels(e.target.value)}
              placeholder="Informe as Labels"
              value={labels}
            />
            <div className="input-groups">
              <input
                type="text"
                onChange={e => setPlataform(e.target.value)}
                placeholder="Informe a plataforma"
                value={plataform}
                className="plataform"
              />
              <input
                type="number"
                onChange={e => setPrice(e.target.value)}
                placeholder="Informe o preço"
                value={price}
                className="price"
                min={1}
              />
              <div className="input-radio">
                <h1>Produto Diponivel</h1>
                <div>
                  <label>Sim</label>

                  <input
                    id="availabel-true"
                    type="radio"
                    name="availabel"
                    className="availabel"
                    onChange={() => setAvailable(true)}
                  />
                  <label>Não</label>
                  <input
                    id="availabel-false"
                    type="radio"
                    name="availabel"
                    className="availabel"
                    onChange={() => setAvailable(false)}
                  />
                </div>
              </div>
            </div>
            <textarea
              type="text"
              placeholder="Informe o Descrição de produto"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
            <Faq>
              <TableContainer>
                <table>
                  <thead>
                    <tr>
                      <th>Pergunta</th>
                      <th>Resposta</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {faqs.map((f, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={index}>
                        <td>{f.question}</td>
                        <td>{f.answer}</td>
                        <td>
                          <MdDelete
                            size={26}
                            color="#22272a"
                            onClick={() => handleDeleteFaq(f, index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
              <div className="btns-add-faq">
                <div className="faq">
                  <input
                    type="text"
                    placeholder="Pergunta"
                    onChange={e => setQuestion(e.target.value)}
                    value={question}
                  />
                  <input
                    type="text"
                    placeholder="Resposta"
                    onChange={e => setAnswer(e.target.value)}
                    value={answer}
                  />
                </div>
                <button type="button" onClick={handleAddFaqs}>
                  Add
                </button>
              </div>
            </Faq>
          </ProductForm>
          <FormImagens>
            <div className="carrousel">
              {images.map(i => (
                <img key={i.id} src={i.url} alt={title} id={i.id} />
              ))}
            </div>
            <div className="listImages">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {images.map((img, index) => (
                    <tr key={img.id}>
                      <td>
                        <a href={`#${img.id}`}>
                          <p>{img.name}</p>
                        </a>
                      </td>
                      <td>
                        <MdDelete
                          size={26}
                          onClick={() => handleDeleteImage(img, index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="button_upload">
                <input
                  id="uploads"
                  type="file"
                  onChangeCapture={handleAddImage}
                />
                <label htmlFor="uploads">
                  <MdFileUpload size={26} color="#fff" />
                  <strong>Upload file</strong>
                </label>
              </div>
            </div>
            <button
              type="button"
              className="button-save"
              onClick={handleSaveProduct}
            >
              Salvar
            </button>
          </FormImagens>
        </div>
      </Panel>
    </SystemWeb>
  );
}

MainSystem.propTypes = {
  match: PropTypes.element.isRequired,
};
