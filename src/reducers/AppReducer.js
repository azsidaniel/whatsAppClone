const INITIAL_STATE = {
  adiciona_contato_email: '',
  cadastro_resultado_txt_error: '',
  cadastro_resultado_inclusao: false,
  mensagem: '',
}
import { 
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  MODIFICA_MENSAGEM,
  ENVIA_MENSAGEM_SUCESSO
} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type){
    
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload }
    
    case ADICIONA_CONTATO_ERRO:
      return { ...state, cadastro_resultado_txt_error: action.payload}

    case ADICIONA_CONTATO_SUCESSO:
      return { ...state, cadastro_resultado_inclusao: action.payload, adiciona_contato_email: '' }

    case MODIFICA_MENSAGEM:
      return { ...state, mensagem: action.payload}
       
    case ENVIA_MENSAGEM_SUCESSO:
      return { ...state, mensagem: ''}
      
    default:
      return state;
  }
}
