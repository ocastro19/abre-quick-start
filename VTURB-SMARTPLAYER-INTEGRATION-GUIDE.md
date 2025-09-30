# Guia Completo: VTurb SmartPlayer + Pixel Pitch Integration

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Como Funciona o vturb-smartplayer](#como-funciona-o-vturb-smartplayer)
3. [Estrutura do Embed VTurb](#estrutura-do-embed-vturb)
4. [Integração com Pixel Pitch](#integração-com-pixel-pitch)
5. [Implementação React Completa](#implementação-react-completa)
6. [Configuração no Painel VTurb](#configuração-no-painel-vturb)
7. [Fluxo Completo de Funcionamento](#fluxo-completo-de-funcionamento)
8. [Código Completo para Reprodução](#código-completo-para-reprodução)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

O **VTurb SmartPlayer** é um web component (`<vturb-smartplayer>`) que renderiza vídeos do VTurb. A integração com **Pixel Pitch** permite que ações específicas sejam disparadas em momentos exatos do vídeo, como mostrar ofertas ou CTAs.

### Componentes da Integração:
- **`<vturb-smartplayer>`**: Web component que renderiza o vídeo
- **Script do Player**: JavaScript que inicializa o player
- **Pixel Personalizado**: Código que dispara eventos em momentos específicos
- **Event Listener**: Script que escuta os eventos e executa ações

---

## ⚙️ Como Funciona o vturb-smartplayer

### 1. Estrutura Básica do Web Component
```html
<vturb-smartplayer 
  id="vid-68b44bae6fe4730e992bed14" 
  style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
</vturb-smartplayer>
```

### 2. Script de Inicialização
```javascript
<script type="text/javascript"> 
  var s=document.createElement("script"); 
  s.src="https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68b44bae6fe4730e992bed14/v4/player.js"; 
  s.async=!0;
  document.head.appendChild(s); 
</script>
```

### 3. Como o Player Carrega
1. **Web Component**: `<vturb-smartplayer>` é registrado no DOM
2. **Script Externo**: Carrega o JavaScript específico do player
3. **Inicialização**: Script encontra o elemento pelo ID e inicializa o vídeo
4. **Renderização**: Vídeo é renderizado dentro do web component

---

## 🏗️ Estrutura do Embed VTurb

### Template Completo no HTML
```html
<template id="main-vsl-embed">
  <!-- Cole seu embed da VSL aqui abaixo-->
  <vturb-smartplayer 
    id="vid-68b44bae6fe4730e992bed14" 
    style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
  </vturb-smartplayer> 
  
  <script type="text/javascript"> 
    var s=document.createElement("script"); 
    s.src="https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68b44bae6fe4730e992bed14/v4/player.js"; 
    s.async=!0;
    document.head.appendChild(s); 
  </script>
  <!-- final do seu embed da VSL-->
</template>
```

### Metadados Importantes
```html
<meta name="main-vsl-aspect-ratio" content="9:16" />

<!-- VTurb Performance Optimization - Preloads -->
<link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
<link rel="dns-prefetch" href="https://cdn.converteai.net">
<link rel="dns-prefetch" href="https://scripts.converteai.net">
<link rel="dns-prefetch" href="https://images.converteai.net">
<link rel="dns-prefetch" href="https://api.vturb.com.br">
```

---

## 🔗 Integração com Pixel Pitch

### 1. Como o Pixel Pitch Funciona
O **Pixel Pitch** é um código JavaScript configurado no painel do VTurb que executa em um momento específico do vídeo (ex: aos 3 minutos).

### 2. Código do Pixel Personalizado
```javascript
// Código configurado no painel VTurb (momento do pitch)
try {
  // Se rodar dentro do iframe, sobe pro parent:
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'vturb_pitch', at: Date.now() }, '*');
  } else {
    // Se rodar no mesmo documento, dispara CustomEvent:
    window.dispatchEvent(new CustomEvent('vturb_pitch', { detail: { at: Date.now() } }));
    // E garante também via postMessage local:
    window.postMessage({ type: 'vturb_pitch', at: Date.now() }, '*');
  }
} catch (e) {}
```

### 3. Event Listener que Escuta o Pixel
```javascript
// Script no index.html que escuta os eventos
window.addEventListener('vturb_pitch', () => {
  console.log('[VTurb] Evento vturb_pitch recebido!');
  show(); // Função que mostra a CTA
});

window.addEventListener('message', ev => {
  const d = ev.data, t = (d && (d.type||d.event)) || d;
  if (String(t).toLowerCase().includes('vturb_pitch')) {
    console.log('[VTurb] Evento vturb_pitch recebido via message!', ev.data);
    show(); // Função que mostra a CTA
  }
});
```

---

## ⚛️ Implementação React Completa

### 1. Componente VTURBPlayer
```tsx
import React, { useEffect, useRef, useState } from 'react';

interface VTURBPlayerProps {
  embedCode: string;
  aspectRatio: '16:9' | '9:16';
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const VTURBPlayer: React.FC<VTURBPlayerProps> = ({ 
  embedCode, 
  aspectRatio,
  className = '', 
  style = {},
  onLoad,
  onError 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!embedCode || !containerRef.current) {
      setIsLoading(false);
      return;
    }

    const container = containerRef.current;
    setIsLoading(true);
    setHasError(false);

    // Limpa container anterior
    container.innerHTML = '';

    try {
      // Processa o embed code
      let modifiedEmbedCode = embedCode.replace(/\bonload\s*=\s*/gi, 'data-onload=');
      modifiedEmbedCode = modifiedEmbedCode.replace(/max-width:\s*\d+px/gi, 'max-width: 100%');
      
      // Insere no container
      container.innerHTML = modifiedEmbedCode;
      
      // Processa scripts
      const containerScripts = container.querySelectorAll('script');
      let scriptIndex = 0;
      
      const loadNextScript = () => {
        if (scriptIndex >= containerScripts.length) {
          setIsLoading(false);
          onLoad?.();
          return;
        }
        
        const script = containerScripts[scriptIndex];
        const scriptSrc = script.src;
        const scriptContent = script.textContent || script.innerHTML;
        
        scriptIndex++;
        
        if (scriptSrc) {
          // Script externo
          const normalizedSrc = scriptSrc.replace(/`/g, '').trim();
          if (!scriptLoadedRef.current.has(normalizedSrc)) {
            const newScript = document.createElement('script');
            newScript.src = normalizedSrc;
            newScript.async = true;
            
            newScript.onload = () => {
              scriptLoadedRef.current.add(normalizedSrc);
              setTimeout(loadNextScript, 100);
            };
            
            newScript.onerror = () => {
              const error = new Error(`Falha ao carregar script VTURB: ${normalizedSrc}`);
              setHasError(true);
              setIsLoading(false);
              onError?.(error);
              loadNextScript();
            };
            
            document.head.appendChild(newScript);
          } else {
            loadNextScript();
          }
        } else if (scriptContent) {
          // Script inline
          try {
            script.remove();
            const sanitizedScript = scriptContent.replace(/(["'])\s*`(https?:\/\/[^`]+)`\s*\1/g, '"$2"');
            const func = new Function(sanitizedScript);
            func();
          } catch (e) {
            console.error('Erro ao executar script inline:', e);
          }
          setTimeout(loadNextScript, 50);
        } else {
          loadNextScript();
        }
      };
      
      loadNextScript();
      
    } catch (error) {
      console.error('Erro ao processar embed VTURB:', error);
      setHasError(true);
      setIsLoading(false);
      onError?.(error as Error);
    }
  }, [embedCode, onLoad, onError]);

  if (!embedCode) {
    return (
      <div className={`w-full bg-gray-100 flex items-center justify-center ${className}`} style={style}>
        <p className="text-gray-500">Nenhum vídeo disponível</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`w-full bg-gray-100 flex items-center justify-center ${className}`} style={{
        aspectRatio: aspectRatio || '16/9',
        ...style
      }}>
        <p className="text-gray-500">Erro ao carregar vídeo</p>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{
      aspectRatio: aspectRatio || '16/9',
      ...style
    }}>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-100 flex items-center justify-center z-10 ${className}`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      <div ref={containerRef} className={`w-full h-full ${className}`}></div>
    </div>
  );
};

export default VTURBPlayer;
```

### 2. Uso do Componente
```tsx
import { VTURBPlayer } from './VTURBPlayer';

// Embed code do VTurb
const embedCode = `
<vturb-smartplayer id="vid-68b44bae6fe4730e992bed14" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
<script type="text/javascript"> 
  var s=document.createElement("script"); 
  s.src="https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68b44bae6fe4730e992bed14/v4/player.js"; 
  s.async=!0;
  document.head.appendChild(s); 
</script>
`;

function VideoContainer() {
  return (
    <div className="max-w-4xl mx-auto">
      <VTURBPlayer 
        embedCode={embedCode}
        aspectRatio="16:9"
        className="w-full h-full"
        onLoad={() => console.log('Vídeo carregado!')}
        onError={(error) => console.error('Erro no vídeo:', error)}
      />
    </div>
  );
}
```

---

## 🔧 Configuração no Painel VTurb

### 1. Acessar Configurações do Player
1. Entre no painel do VTurb
2. Selecione seu vídeo/player
3. Vá em "Configurações Avançadas" ou "Pixels Personalizados"

### 2. Configurar Pixel no Momento do Pitch
1. Defina o tempo exato (ex: 03:30 para 3 minutos e 30 segundos)
2. Adicione o código do pixel:

```javascript
try {
  // Se rodar dentro do iframe, sobe pro parent:
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'vturb_pitch', at: Date.now() }, '*');
  } else {
    // Se rodar no mesmo documento, dispara CustomEvent:
    window.dispatchEvent(new CustomEvent('vturb_pitch', { detail: { at: Date.now() } }));
    // E garante também via postMessage local:
    window.postMessage({ type: 'vturb_pitch', at: Date.now() }, '*');
  }
} catch (e) {}
```

### 3. Salvar e Publicar
1. Salve as configurações
2. Publique o player
3. Teste a integração

---

## 🔄 Fluxo Completo de Funcionamento

### Diagrama do Fluxo:
```
1. Página Carrega
   ↓
2. Template com vturb-smartplayer é processado
   ↓
3. Script do player é carregado assincronamente
   ↓
4. Web component vturb-smartplayer é inicializado
   ↓
5. Vídeo começa a reproduzir
   ↓
6. Usuário assiste até o momento do pitch (ex: 3:30)
   ↓
7. Pixel personalizado executa no momento configurado
   ↓
8. Evento 'vturb_pitch' é disparado
   ↓
9. Event listener captura o evento
   ↓
10. Função show() é executada
    ↓
11. CTA/Oferta aparece na tela
    ↓
12. Estado é salvo no sessionStorage
```

### Sequência Técnica:
1. **HTML**: `<vturb-smartplayer>` é inserido no DOM
2. **JavaScript**: Script externo carrega e registra o web component
3. **Inicialização**: Player encontra elemento pelo ID e inicializa
4. **Reprodução**: Vídeo começa a tocar
5. **Pixel Trigger**: No momento configurado, pixel executa
6. **Event Dispatch**: `vturb_pitch` é disparado
7. **Event Handling**: Listener captura e executa ação
8. **UI Update**: CTA aparece com animação

---

## 💻 Código Completo para Reprodução

### 1. index.html Completo
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="DISCOVER CELTIC SALT TRICK" />
    
    <!-- VTurb Performance Optimization -->
    <script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);</script>
  
    <template id="main-vsl-embed">
      <!-- Cole seu embed da VSL aqui abaixo-->
      <vturb-smartplayer id="vid-68b44bae6fe4730e992bed14" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> 
      <script type="text/javascript"> 
        var s=document.createElement("script"); 
        s.src="https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68b44bae6fe4730e992bed14/v4/player.js"; 
        s.async=!0;
        document.head.appendChild(s); 
      </script>
      <!-- final do seu embed da VSL-->
    </template>
    
    <meta name="main-vsl-aspect-ratio" content="9:16" />

    <!-- VTurb Performance Optimization - Preloads -->
    <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
    <link rel="dns-prefetch" href="https://cdn.converteai.net">
    <link rel="dns-prefetch" href="https://scripts.converteai.net">
    <link rel="dns-prefetch" href="https://images.converteai.net">
    <link rel="dns-prefetch" href="https://api.vturb.com.br">
    
    <script type="module" src="/src/main.tsx"></script>
  </head>
  <body>
    <div id="root"></div>
    
    <!-- VSL Pitch Listener (corrigido para aguardar React) -->
    <script>
    (function () {
      console.log('[VTurb] Script iniciado');
      
      let cta = null;
      let isShown = false;
      
      // Função que procura o elemento #cta-section
      const findCTAElement = () => {
        if (!cta) {
          cta = document.getElementById('cta-section');
          if (cta) {
            console.log('[VTurb] Elemento #cta-section encontrado!');
          } else {
            console.log('[VTurb] Elemento #cta-section ainda não encontrado, tentando novamente...');
          }
        }
        return cta;
      };

      // Função que mostra a CTA
      const show = () => {
        console.log('[VTurb] Função show() chamada');
        
        if (isShown) {
          console.log('[VTurb] CTA já está sendo exibida');
          return;
        }
        
        const ctaElement = findCTAElement();
        if (!ctaElement) {
          console.log('[VTurb] Elemento #cta-section não encontrado, tentando novamente em 500ms');
          setTimeout(show, 500);
          return;
        }
        
        console.log('[VTurb] Mostrando CTA section');
        ctaElement.classList.add('show');
        isShown = true;
        
        try { 
          sessionStorage.setItem('vturb_pitch_seen','1');
          console.log('[VTurb] Estado salvo no sessionStorage');
        } catch (e) {
          console.log('[VTurb] Erro ao salvar no sessionStorage:', e);
        }
      };
      
      // Função que aguarda o React carregar
      const waitForReact = () => {
        const checkInterval = setInterval(() => {
          if (findCTAElement()) {
            clearInterval(checkInterval);
            console.log('[VTurb] React carregado, elemento encontrado');
            
            // Verifica se já foi mostrado nesta sessão
            try { 
              if (sessionStorage.getItem('vturb_pitch_seen')==='1') {
                console.log('[VTurb] CTA já foi vista nesta sessão, mostrando novamente');
                show();
              }
            } catch (e) {
              console.log('[VTurb] Erro ao verificar sessionStorage:', e);
            }
          }
        }, 100);
        
        // Timeout de segurança - para de procurar após 10 segundos
        setTimeout(() => {
          clearInterval(checkInterval);
          console.log('[VTurb] Timeout: parou de procurar o elemento #cta-section');
        }, 10000);
      };

      // Aguarda o DOM estar pronto
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForReact);
      } else {
        waitForReact();
      }

      // Event listeners para o evento vturb_pitch
      window.addEventListener('vturb_pitch', () => {
        console.log('[VTurb] Evento vturb_pitch recebido!');
        show();
      });
      
      window.addEventListener('message', ev => {
        const d = ev.data, t = (d && (d.type||d.event)) || d;
        if (String(t).toLowerCase().includes('vturb_pitch')) {
          console.log('[VTurb] Evento vturb_pitch recebido via message!', ev.data);
          show();
        }
      });

      console.log('[VTurb] Event listeners configurados');
    })();
    </script>
    
  </body>
</html>
```

### 2. App.tsx com CTA Section
```tsx
import React from 'react';
import { VTURBPlayer } from './components/VTURBPlayer';

// Embed code do seu vídeo VTurb
const embedCode = `
<vturb-smartplayer id="vid-68b44bae6fe4730e992bed14" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
<script type="text/javascript"> 
  var s=document.createElement("script"); 
  s.src="https://scripts.converteai.net/d37be28a-dfe1-4a86-98a2-9c82944967ec/players/68b44bae6fe4730e992bed14/v4/player.js"; 
  s.async=!0;
  document.head.appendChild(s); 
</script>
`;

function App() {
  return (
    <div className="app">
      {/* Conteúdo normal da página */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Minha Aplicação</h1>
      </header>
      
      <main className="max-w-4xl mx-auto px-4">
        {/* Vídeo VTurb */}
        <div className="mb-8">
          <VTURBPlayer 
            embedCode={embedCode}
            aspectRatio="16:9"
            className="w-full h-full"
            onLoad={() => console.log('Vídeo VTurb carregado!')}
            onError={(error) => console.error('Erro no vídeo VTurb:', error)}
          />
        </div>
        
        {/* Conteúdo adicional */}
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Assista ao vídeo acima e aguarde nossa oferta especial!
          </p>
        </div>
      </main>
      
      {/* CTA Section - Controlada pelo VSL Pitch Listener */}
      <div id="cta-section" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Oferta Especial!</h2>
          <p className="text-lg mb-6 text-center">
            Aproveite esta oportunidade única que apareceu no momento certo do vídeo!
          </p>
          <button className="w-full bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-colors">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
```

### 3. CSS Necessário
```css
/* Estilos para o VSL Pitch Listener */
#cta-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
}

#cta-section.show {
  opacity: 1;
  transform: translateY(0);
  display: flex !important; /* Sobrescreve hidden */
}
```

---

## 🐛 Troubleshooting

### Problema 1: vturb-smartplayer não carrega
**Sintomas**: Elemento aparece vazio ou com erro

**Soluções**:
```javascript
// 1. Verificar se script carregou
console.log('Scripts VTurb:', document.querySelectorAll('script[src*="converteai.net"]'));

// 2. Verificar se web component foi registrado
console.log('VTurb SmartPlayer:', customElements.get('vturb-smartplayer'));

// 3. Verificar console por erros de CORS ou rede
```

### Problema 2: Pixel não dispara evento
**Sintomas**: Vídeo funciona mas CTA não aparece

**Verificações**:
```javascript
// 1. Testar evento manualmente
window.dispatchEvent(new CustomEvent('vturb_pitch'));

// 2. Verificar se pixel está configurado no painel VTurb
// 3. Verificar logs no console durante reprodução do vídeo
```

### Problema 3: CTA não aparece
**Sintomas**: Evento é disparado mas interface não muda

**Soluções**:
```javascript
// 1. Verificar se elemento existe
console.log('CTA Element:', document.getElementById('cta-section'));

// 2. Verificar CSS
const element = document.getElementById('cta-section');
console.log('Display:', window.getComputedStyle(element).display);
console.log('Classes:', element.className);

// 3. Forçar exibição para teste
element.classList.add('show');
```

---

## ✅ Checklist de Implementação

### Configuração Inicial:
- [ ] Template com `<vturb-smartplayer>` configurado
- [ ] Script de carregamento do player adicionado
- [ ] Preloads e DNS prefetch configurados
- [ ] Meta tag com aspect ratio definida

### Integração React:
- [ ] Componente VTURBPlayer implementado
- [ ] Processamento de embed code funcionando
- [ ] Tratamento de erros implementado
- [ ] Loading state configurado

### Pixel Pitch:
- [ ] Pixel personalizado configurado no painel VTurb
- [ ] Event listeners configurados no index.html
- [ ] Elemento #cta-section criado
- [ ] CSS com classe .show implementado

### Testes:
- [ ] Vídeo carrega corretamente
- [ ] Pixel dispara no momento correto
- [ ] CTA aparece com animação
- [ ] SessionStorage mantém estado
- [ ] Logs aparecem no console

---

## 📝 Resumo para IA

Para reproduzir esta integração exatamente:

1. **Copie o template** com `<vturb-smartplayer>` e script
2. **Implemente o componente** VTURBPlayer em React
3. **Configure o pixel** no painel VTurb com o código fornecido
4. **Adicione o event listener** no index.html
5. **Crie o elemento** `#cta-section` com CSS apropriado
6. **Teste** a sequência completa

**Resultado**: Vídeo VTurb funciona perfeitamente e dispara CTA no momento exato configurado no pixel pitch.

---

*Guia criado em: Janeiro 2025*  
*Versão: 1.0*  
*Compatibilidade: VTurb v4+, React 16+, Web Components*