import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import './Cadastro.css'
import { useLocation, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Alterar = () => {

    const {produto} = useLocation().state;
    const [dados, setDados] = useState({})
    const [clicou, setClicou] = useState(false)
    const [navegar, setNavegar] = useState(false)

    useEffect(()=>{
        if(clicou){
            setNavegar(true)
        }
        
        return () =>{
            setNavegar(false)
            setClicou(false)
        }
    }, [clicou])

    function enviarDados(){
        axios.put('http://localhost:8080/produto', 
            dados
        ).then(response => console.log(response))
        .then(dados => {
            alert('Dados alterados com sucesso');
            
        })
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
        if (clicou) {
            enviarDados()
            setNavegar(true)
        } 
        else {
            console.log('app no ar')
        }
       return (()=>{
            setClicou(false);
            setNavegar(false);
        })
    }, [clicou])
    
    return (
    <div>
        <h1>Alterar Produto</h1>
        <Formik
            initialValues={{
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao,
                codigoBarras: produto.codigoBarras,
                foto: produto.foto,
                preco: produto.preco,
                categoria: produto.categoria,
                destaque: produto.destaque,
                statusProd: produto.statusProd
            }}
            onSubmit={(values, actions) => {

                if(values.nome.length > 0){
                        setTimeout(() => {
                        setDados({
                            id: values.id,
                            nome: values.nome,
                            descricao: values.descricao,
                            codigoBarras: values.codigoBarras,
                            foto: values.foto,
                            preco: values.preco,
                            categoria: values.categoria,
                            destaque: values.destaque,
                            statusProd: values.statusProd
                        })
                        setClicou(true)
                    }, 1000);
                } else {
                    alert('Favor preencher informações!')
                }
                
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <input
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={produto.id}
                            placeholder='0'
                            name="id"
                            disabled
                        />
                        {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.nome}
                            placeholder="Nome do Produto"
                            name="nome"
                        />
                        {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.descricao}
                            name="descricao"
                            placeholder="Descrição do Produto"
                        />
                        {props.errors.descricao && <div id="feedback">{props.errors.descricao}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.codigoBarras}
                            name="codigoBarras"
                            placeholder="1112223334445"
                        />
                        {props.errors.codigoBarras && <div id="feedback">{props.errors.codigoBarras}</div>}
                    </div>
                    <div>
                        <input
                            type="image"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.foto}
                            name="foto"
                            placeholder="Foto do Produto"
                            hidden
                        />
                        {props.errors.foto && <div id="feedback">{props.errors.foto}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.preco}
                            name="preco"
                            placeholder="0.0"
                        />
                        {props.errors.preco && <div id="feedback">{props.errors.preco}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.categoria}
                            name="categoria"
                            placeholder="Categoria do Produto"
                        />
                        {props.errors.categoria && <div id="feedback">{props.errors.categoria}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.destaque}
                            name="destaque"
                            placeholder="Destaque do Produto"
                        />
                        {props.errors.destaque && <div id="feedback">{props.errors.destaque}</div>}
                    </div>
                    <div>
                        <select
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.statusProd}
                            name="statusProd"
                        >
                            <option>ATIVO</option>
                            <option>INATIVO</option>
                        </select>
                        {props.errors.statusProd && <div id="feedback">{props.errors.statusProd}</div>}
                    </div>
                    
                    {(navegar) ? <Navigate 
                        to="/listagem" 
                        replace={true}
                    /> : <></>}

                    <Button 
                        variant="primary"
                        type="submit">ALTERAR</Button>
                </form>
            )}
        </Formik>
    </div>
    );
}

export default Alterar