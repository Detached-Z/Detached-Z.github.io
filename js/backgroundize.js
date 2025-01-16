/**
 * ���ص�ǰ������ģʽ��dark��light��
 * @returns {string} ��ǰ������ģʽ
 */
function getThemeMode() {
    const theme = localStorage.getItem('Fluid_Color_Scheme');
    console.log('��ǰ����ģʽΪ��', theme || 'dark');
    return theme === 'light' ? 'light' : 'dark';
  }
  
  /**
   * ��������ģʽ���豸�������ñ���ͼƬ
   * @param {String} themeMode - 'light' �� 'dark'
   */
  function setBackgroundImage(themeMode) {
    const isMobile = window.innerWidth < 768;
    const webBgElement = document.querySelector('#web_bg');
  
    if (isMobile) {
      webBgElement.style.backgroundImage = `var(--mobile-bg-image)`;
    } else if (themeMode === 'dark') {
      webBgElement.style.backgroundImage = `var(--desktop-bg-image-night)`;
    } else {
      webBgElement.style.backgroundImage = `var(--desktop-bg-image-normal)`;
    }
  }
  
  /**
   * ��ʼ������ͼƬ����
   * @returns {void}
   */
  function initBackground() {
    const theme = getThemeMode();
    setBackgroundImage(theme);
  }
  
  /**
   * ����Banner��ʽ�����ر���ͼƬ�����ֲ�
   * @returns {void}
   */
  function resetBannerStyles() {
    document.querySelector("#banner").setAttribute('style', 'background-image: none');
    document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');
  }
  
  // ���������л���ť����¼�
  const themeBtn = document.querySelector('#color-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const theme = getThemeMode();
      setBackgroundImage(theme);
      console.log(`�л���${theme === 'light' ? '�ռ�' : 'ҹ��'}ģʽ`);
    });
  }
  
  // ��ʼ����������ʽ
  initBackground();
  resetBannerStyles();
  
  // �������ڴ�С�仯��������������������
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setBackgroundImage(getThemeMode());
    }, 200);
  }, {
    passive: true // ��ֹĬ���¼�
  });
  
  /**
   * �������ʵ�ֲ�ͬ������Ϊ��ͬ�ı���ͼƬ��
   * ���Զ���һ���������ڴ�Ų�ͬ���µ�·����ͨ��pathname�жϵ�ǰ����·�������ö�Ӧ�ı���ͼƬ��
   * ���磺
   * --------�ָ���--------
   * const articleBgMap = {
   *   '/article1': 'url(https://example.com/bg1.jpg)',
   *   '/article2': 'url(https://example.com/bg2.jpg)',
   *   '/article3': 'url(https://example.com/bg3.jpg)',
   * };
   * const currentPathname = window.location.pathname;
   * const bgUrl = articleBgMap[currentPathname] || 'url(https://example.com/bg-default.jpg)';
   * document.querySelector('#web_bg').style.backgroundImage = bgUrl;
   * ������
   * --------�ָ���--------
   * ��Ȼ�������������Ӵ����������������㲻ͬ���µı���ͼƬ����
   * �Ҳ����ϻ��и��õ�ʵ�ַ�ʽ�����Ͻ����ο���
   */
  