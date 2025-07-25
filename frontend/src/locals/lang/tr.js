export default {
  // Giriş Arayüzü
  auth: {
    loginToLemonAI: "LemonAI'a Giriş Yap",
    registerLemonAIAccount: "LemonAI Hesabı Kaydol",
    verifyEmail: "E-posta Doğrulama",
    resetPassword: "Şifre Sıfırlama",
    loginWithGoogle: "Google ile Giriş Yap",
    registerWithGoogle: "Google ile Kaydol",
    login: "Giriş Yap",
    register: "Kaydol",
    logOut: "Çıkış Yap",
    forgotPassword: "Şifrenizi mi unuttunuz?",
    resetPasswordButton: "Şifreyi Sıfırla",
    backToLogin: "Girişe Geri Dön",
    verifyEmailButton: "E-postayı Doğrula",
    resendCode: "Doğrulama Kodunu Yeniden Gönder",
    email: "E-posta",
    password: "Şifre",
    fullname: "Tam Ad",
    codeSentTo: "Doğrulama kodu şu adrese gönderildi:",
    pleaseInputEmail: "Lütfen e-posta adresinizi girin",
    pleaseInputValidEmail: "Lütfen geçerli bir e-posta adresi girin",
    pleaseInputPassword: "Lütfen şifrenizi girin",
    pleaseInputFullname: "Lütfen tam adınızı girin",
    pleaseInputVerifyCode: "Lütfen doğrulama kodunu girin",
    pleaseInputNewPassword: "Lütfen yeni şifrenizi girin",
    pleaseConfirmPassword: "Lütfen şifreyi doğrulayın",
    pleaseInput6DigitCode: "Lütfen 6 haneli doğrulama kodunu girin",
    or: "veya",
    noAccount: "Hesabınız yok mu?",
    haveAccount: "Zaten bir hesabınız var mı?",
    notReceivedCode: "Doğrulama kodu almadınız mı?",
    codeSent: "Doğrulama kodu gönderildi",
    registrationSuccessful: "Kayıt başarılı, lütfen giriş yapın",
    verificationCodeError: "Doğrulama kodu yanlış, lütfen tekrar deneyin",
    doNotSendFrequently: "Doğrulama kodunu sık sık göndermeyin",
    codeResent: "Doğrulama kodu yeniden gönderildi",
    loginSuccessful: "Giriş başarılı",
    loginFailed: "Giriş başarısız, lütfen e-posta ve şifrenizi kontrol edin",
    fillCompleteInfo: "Lütfen tüm kayıt bilgilerini doldurun",
    pleaseEnterValidEmail: "Lütfen geçerli bir e-posta adresi girin",
    passwordTooShort: "Şifre en az 6 karakter olmalıdır",
    registrationFailed: "Kayıt başarısız, lütfen giriş bilgilerini kontrol edin",
    pleaseInputCode: "Lütfen doğrulama kodunu girin",
    passwordsDoNotMatch: "Şifreler eşleşmiyor",
    passwordResetSuccessful: "Şifre sıfırlama başarılı, lütfen giriş yapın",
    passwordResetFailed: "Şifre sıfırlama başarısız, lütfen giriş bilgilerini kontrol edin",
    googleLoginFailed: "Google ile giriş yönlendirmesi başarısız, lütfen daha sonra tekrar deneyin",
    appleLoginInProgress: "Apple ile giriş özelliği geliştirme aşamasında",
    googleRegisterInProgress: "Google ile kayıt özelliği geliştirme aşamasında",
    appleRegisterInProgress: "Apple ile kayıt özelliği geliştirme aşamasında",
    verifyingGoogleLogin: "Google ile giriş doğrulanıyor"
  },
  // Ana Arayüz
  lemon: {
    // Ana Sayfa
    welcome: {
      greeting: "Merhaba",
      question: "Sizin için ne yapabilirim?",
      tabs: {
        featured: "Öne Çıkanlar",
        research: "Araştırma",
        lifestyle: "Yaşam Tarzı",
        dataAnalysis: "Veri Analizi",
        education: "Eğitim",
        productivity: "Verimlilik",
        other: "Diğer"
      },
      placeholder: "Size nasıl yardımcı olabilirim?",
      communityNote: "Toplulukta gösterilen tüm görevler ve web siteleri, kullanıcılar tarafından gönüllü olarak paylaşılır. Platform, kullanıcı onayı olmadan hiçbir içeriği göstermez."
    },
    // Sohbet Başlığı
    chatHeader: {
      share: "Paylaş",
      viewAllFiles: "Bu görevdeki tüm dosyaları görüntüle",
      moreOptions: "Daha Fazla Seçenek",
      rename: "Yeniden Adlandır",
      editTitle: "Başlığı Düzenle",
      enterNewTitle: "Yeni başlık girin",
      cancel: "İptal",
      confirm: "Onayla",
      favorite: "Favorilere Ekle",
      unfavorite: "Favorilerden Çıkar"
    },
    // Mesaj Sohbet Listesi Sayfası
    message: {
      runCommand: "Bash komutunu çalıştır",
      readFile: "Dosyayı oku",
      editFile: "Dosyayı düzenle",
      browsing: "Geziniyor",
      searching: "Arıyor",
      minutesAgo: "dakika önce",
      secondsAgo: "saniye önce",
      hoursAgo: "saat önce",
      daysAgo: "gün önce",
      monthsAgo: "ay önce",
      yearsAgo: "yıl önce",
      copySuccess: "Kopyalama başarılı",
      copyError: "Kopyalama başarısız",
      botInitialResponse: "Merhaba, talebinizi aldım. Sorunu analiz ediyorum, lütfen bekleyin.",
      botInitialPlan: "Plan hazırlanıyor"
    },
    // Yan Çubuk
    sidebar: {
      newTask: "Yeni Görev",
      shortcutKey: "T",
      moreOptions: "Daha Fazla Seçenek",
      share: "Paylaş",
      rename: "Yeniden Adlandır",
      collect: "Favorilere Ekle",
      delete: "Sil",
      confirmDelete: "Silmeyi Onayla",
      deleteConfirmation: "Bu sohbeti silmek istediğinizden emin misiniz?",
      cancel: "İptal",
      confirm: "Onayla",
      noChats: "Başlamak için yeni bir görev oluşturun",
      searchPlaceholder: "Görevleri ara..."
    },
    // Dosya Gezgini
    fileExplorer: {
      allFilesInTask: "Bu görevdeki tüm dosyalar",
      noContent: "İçerik yok",
      preview: "Önizleme",
      locateInChat: "Sohbette bul",
      download: "İndir",
      saveToGoogleDrive: "Google Drive'a kaydet",
      selectAll: "Tümünü seç",
      cancel: "İptal",
      batchDownload: "Toplu indirme",
      fileTypes: {
        all: "Tümü",
        document: "Belge",
        image: "Resim",
        codeFile: "Kod dosyası",
        link: "Bağlantı"
      },
      timeGroups: {
        today: "Bugün",
        yesterday: "Dün",
        earlier: "Daha önce"
      },
      weekdays: {
        sunday: "Pazar",
        monday: "Pazartesi",
        tuesday: "Salı",
        wednesday: "Çarşamba",
        thursday: "Perşembe",
        friday: "Cuma",
        saturday: "Cumartesi"
      }
    },
    fullPreview: {
      download: "İndir",
      exportToPDF: "PDF olarak dışa aktar",
      saveToGoogleDrive: "Google Drive'a kaydet",
      maximize: "Büyüt",
      minimize: "Küçült",
      previous: "Önceki",
      next: "Sonraki",
      copy: "Kopyala",
      code: "Kod",
      preview: "Önizleme",
      close: "Kapat",
      fileTypePresentation: "Önizleme yapılamıyor",
      cannotPreviewFormat: "Bu format önizlenemez.",
      downloadToView: "İçeriği görüntülemek için dosyayı indirin.",
      noContentToCopy: "Kopyalanacak içerik yok.",
      clipboardNotSupported: "Mevcut tarayıcı pano işlemlerini desteklemiyor, lütfen manuel kopyalayın.",
      contentCopied: "İçerik kopyalandı.",
      copyFailed: "Kopyalama başarısız, lütfen tekrar deneyin veya manuel kopyalayın.",
      exportPDFPending: "PDF dışa aktarma başarılı",
      saveToGoogleDrivePending: "Google Drive'a kaydetme özelliği geliştirme aşamasında."
    },
    preview: {
      title: "Lemon'un Bilgisayarı",
      openVsCode: "VS Code",
      using: "Lemon kullanıyor",
      performing: "Yürütülüyor",
      previousStep: "Önceki adım",
      nextStep: "Sonraki adım",
      realtime: "Gerçek zamanlı",
      waitingForDevelopment: "Geliştirme bekleniyor...",
      browser: "Tarayıcı",
      browsing: "Geziniyor",
      editor: "Editör",
      editingFile: "Dosya düzenleniyor",
      terminal: "Terminal",
      executingCommand: "Komut yürütülüyor",
      readingFile: "Dosya okunuyor",
      search: "Ara",
      searching: "Arıyor"
    }
  },
  // Ayarlar Arayüzü
  setting: {
    back: "Geri",
    doneStep: "Tamamlandı",
    prevStep: "Önceki adım",
    nextStep: "Sonraki adım",
    settingModel: "Modeli ayarla",
    settingModelTips: "Ayarlar sayfasına gitmek için ayarlara tıklayın",
    menu: {
      basic: "Temel Ayarlar",
      defaultModel: "Varsayılan Model",
      modelService: "Model Servisi",
      searchService: "Arama Servisi",
      mcpService: "MCP Servisi",
      experience: "Deneyim Kütüphanesi"
    },
    basic: {
      title: "Temel Ayarlar",
      langTitle: "Dil Ayarları",
      languagePreference: "Dil Tercihi",
      lang: {
        en: "İngilizce",
        zh: "Çince (Basitleştirilmiş)",
        de: "Almanca",
        es: "İspanyolca",
        fr: "Fransızca",
        ja: "Japonca",
        kr: "Korece",
        tr: "Türkçe",
        pt: "Portekizce",
        tw: "Çince (Geleneksel)",
        vi: "Vietnamca"
      }
    },
    modelService: {
      modelService: "Model Servisi",
      modelServiceTipsOne: "Adım 1: Model servis sağlayıcısını seçin",
      modelServiceTipsTwo: "Adım 2: API anahtarını girin",
      modelServiceTipsThree: "Adım 3: Model servisini etkinleştirin",
      title: "Model Servisi",
      searchPlaceholder: "Platform ara",
      defaultPlatform: "Varsayılan sistem platformu",
      modelPlatform: "Model Platformu",
      statusOn: "Etkin",
      addPlatform: "Ekle",
      save: "Kaydet",
      defaultPlatformDescription: "Varsayılan platform modeli sistem tarafından sağlanır, yapılandırma gerekmez",
      apiKey: "API Anahtarı",
      apiKeyPlaceholder: "API anahtarını girin",
      getApiKey: "Anahtarı almak için buraya tıklayın",
      check: "Kontrol Et",
selectCheckModel: "Lütfen kontrol modelini seçin",
      apiAddress: "API Adresi",
      apiAddressPlaceholder: "API adresini girin",
      apiAddressTip: "/ ile bitiyorsa v1 sürümü yoksayılır, # ile bitiyorsa girilen adres zorunlu kullanılır",
      activateTime: "Etkinleştirme Süresi",
      activateTimePlaceholder: "Etkinleştirme süresini (dakika) girin",
      models: "Modeller",
      ungrouped: "Gruplandırılmamış",
      viewOfficialDocs: "Daha fazla bilgi için platformun resmi belgelerine bakın",
      add: "Ekle",
      confirmDeleteModel: "Bu modeli silmek istediğinizden emin misiniz?",
      deleteModelSuccess: "Model başarıyla silindi",
      deleteModelFailed: "Model silme başarısız",
      addModelSuccess: "Model başarıyla eklendi",
      updateModelSuccess: "Model başarıyla güncellendi",
      copySuccess: "İsim kopyalandı",
      typeVision: "Görsel",
      typeNetwork: "Ağ",
      typeEmbed: "Gömme",
      typeReasoning: "Muhakeme",
it: "Araç",
      addProvider: "Sağlayıcı Ekle",
      confirm: "Onayla",
      cancel: "İptal",
      platformLogo: "Platform Logosu",
      providerName: "Sağlayıcı Adı",
      namePlaceholder: "Ad",
      providerType: "Sağlayıcı Türü",
      typePlaceholder: "Tür",
      enterName: "Ad girin",
      selectType: "Tür seçin",
      addPlatformSuccess: "Platform başarıyla eklendi",
      formValidationFailed: "Form doğrulama başarısız",
      addModel: "Model Ekle",
      editModel: "Modeli Düzenle",
      modelId: "Model Kimliği",
      modelIdPlaceholder: "Model kimliğini girin",
      modelName: "Model Adı",
      modelNamePlaceholder: "Model adı",
      groupName: "Grup Adı",
      groupNamePlaceholder: "Grup adı",
      modelTypes: "Model Türleri",
      enterModelId: "Model kimliğini girin",
      enterModelName: "Model adını girin",
      enterGroupName: "Grup adını girin",
      selectModelType: "En az bir model türü seçin",
      editProvider: "Sağlayıcıyı Düzenle",
      updatePlatformSuccess: "Platform başarıyla güncellendi",
      deletePlatformSuccess: "Platform başarıyla silindi",
      deletePlatformFailed: "Platform silme başarısız",
      saveSuccess: "Kaydetme başarılı",
      saveFailed: "Kaydetme başarısız",
      platforms: {
        Anthropic: "Anthropic",
        ModelScope: "ModelScope Sihir",
        Gemini: "Gemini",
        OpenAI: "OpenAI",
        Ollama: "Ollama",
        qiniu: "Qiniu Bulut",
        WanJieData: "WanJie Veri",
        PPIO: "PPIO Bulut",
        QianFan: "Baidu Bulut QianFan",
        SiliconFlow: "Silikon Akışı",
        Volcengine: "Volcengine",
        DeepSeek: "DeepSeek",
        Bailian: "Alibaba Bulut Bailian",
        OpenRouter: "OpenRouter",
        LMStudio: "LM Studio"
      }
    },
    defaultModel: {
      defaultModel: "Varsayılan Modeli Ayarla",
      defaultModelTipsOne: "Varsayılan model sayfasına gitmek için varsayılan modele tıklayın",
      topicNamingModel: "Konu Adlandırma Modeli",
      topicNamingModelTips: "Yeni konuları otomatik olarak adlandırmak için kullanılan model",
      emptymodelTips: "Model servisinde ilgili platformu etkinleştirin",
      DefaultModelSetting: "Varsayılan Model Ayarları",
      defaultAssistantModel: "Varsayılan Asistan Modeli",
      assistantModelTips: "Asistan oluşturulurken kullanılan model;",
      topicNamingModel: "Konu Adlandırma Modeli",
      topicNamingModelTips: "Yeni konuları otomatik olarak adlandırmak için kullanılan model",
      translationModel: "Çeviri Modeli",
      translationModelTips: "Çeviri hizmetleri için kullanılan model",
      browserUseModel: "Tarayıcı Servis Modeli",
      browserUseModelTips: "Dahili tarayıcıda kullanılan model, araç ve fonksiyon çağrılarını desteklemelidir",
      saveSuccess: "Ayarlar başarıyla kaydedildi",
      assistantSettings: "Asistan Ayarları",
      confirm: "Onayla",
      cancel: "İptal",
      assistantName: "Asistan Adı",
      assistantNamePlaceholder: "Asistan adını girin",
      prompt: "Komut İstemi",
      promptPlaceholder: "Komut istemini girin",
      modelParameters: "Model Parametreleri",
      temperature: "Sıcaklık",
      topP: "Top P",
      maxTokens: "Maksimum Jeton Sayısı",
      enableLengthLimit: "Uzunluk Sınırını Etkinleştir",
      topicNamingSettings: "Konu Adlandırma Ayarları",
      topicAutoNaming: "Otomatik Konu Adlandırma",
      topicNamingPrompt: "Konu Adlandırma Komut İstemi",
      translationSettings: "Çeviri Ayarları",
      translationPrompt: "Çeviri Komut İstemi"
    },
    searchService: {
      searchService: "Arama Servisini Ayarla",
      searchServiceTipsOne: "Arama servisi sayfasına gitmek için arama servisine tıklayın",
      searchEngineTipsOne: "Adım 1: Arama servisi sağlayıcısını seçin",
      searchEngineTipsTwo: "Adım 2: API anahtarını girin",
      title: "Arama Servisi",
      blacklistSubscription: "Kara Liste Aboneliği",
      addSubscription: "Abonelik Ekle",
      updateNow: "Şimdi Güncelle",
      deleteSubscription: "Aboneliği Sil",
      confirm: "Onayla",
      cancel: "İptal",
      subscriptionUrl: "Abonelik URL'si",
      subscriptionUrlPlaceholder: "https://example/abcd",
      subscriptionName: "Abonelik Adı",
      subscriptionNamePlaceholder: "İndirilen abonelik kaynağında isim yoksa kullanılan alternatif isim",
      name: "Ad",
      url: "URL",
      addSubscriptionSuccess: "Abonelik başarıyla eklendi",
      deleteSubscriptionSuccess: "Abonelik başarıyla silindi",
      deleteSubscriptionFailed: "Abonelik silme başarısız",
      saveConfigSuccess: "Yapılandırma başarıyla kaydedildi",
      saveConfigFailed: "Yapılandırma kaydetme başarısız",
      loadConfigFailed: "Yapılandırma yükleme başarısız",
      formValidationFailed: "Form doğrulama başarısız",
      enterSubscriptionUrl: "Abonelik URL'sini girin",
      invalidUrl: "Geçerli bir URL girin",
      enterSubscriptionName: "Abonelik adını girin",
      noSubscriptionSelected: "Abonelik seçilmedi",
      searchProvider: "Arama Sağlayıcısı",
      generalSettings: "Genel Ayarlar",
      includeDate: "Tarihi Dahil Et",
      includeServer: "Sunucuyu Dahil Et",
      searchEnhancement: "Arama Geliştirme",
      searchResultCount: "Arama Sonuç Sayısı",
      default: "Varsayılan",
      blacklist: "Kara Liste",
      blacklistTips: "Arama sonuçlarından hariç tutulacak alan adlarını girin",
      blacklistPlaceholder: "Her satıra bir alan adı girin",
      save: "Kaydet",
      apiTips: "API Yapılandırması",
      apiKeyPlaceholder: "API anahtarınızı girin",
      apiKey: "API Anahtarı",
      apiAddress: "API Adresi",
      tavilyName: "Tavily (anahtar)",
      baiduName: "Baidu (ücretsiz)",
      bingName: "Bing (ücretsiz)",
      saveBlacklistSuccess: "Kara liste başarıyla kaydedildi",
      saveBlacklistFailed: "Kara liste kaydetme başarısız"
    },
    mcpService: {
      title: "MCP Servisi",
      addServer: "Sunucu Ekle",
      save: "Kaydet",
      name: "Ad",
      namePlaceholder: "Adı girin",
      description: "Açıklama",
      descriptionPlaceholder: "Açıklama",
      type: "Tür",
      stdio: "Standart Giriş/Çıkış (stdio)",
      sse: "Sunucu Gönderilen Olaylar (sse)",
      streamableHttp: "Akış Yapılabilir HTTP (streamableHttp)",
      command: "Komut",
      commandPlaceholder: "uvx veya npx",
      packageSource: "Paket Kaynağı",
      default: "Varsayılan",
      taobaoNpmMirror: "Taobao NPM Aynası",
      tsinghua: "Tsinghua Üniversitesi",
      aliyun: "Alibaba Bulut",
      ustc: "Çin Bilim ve Teknoloji Üniversitesi",
      huaweiCloud: "Huawei Bulut",
      tencentCloud: "Tencent Bulut",
      args: "Argümanlar",
      argsPlaceholder: "arg1\narg2",
      env: "Çevre Değişkenleri",
      envPlaceholder: "KEY1=VALUE1\nKEY2=VALUE2",
      mcpServer: "MCP Sunucusu"
    },
    experience: {
      title: "Deneyim Kütüphanesi",
      addExperience: "Deneyim Ekle",
      editExperience: "Deneyimi Düzenle",
      close: "Kapat",
      titleLabel: "Başlık",
      titlePlaceholder: "Deneyim başlığı",
      goalLabel: "Amaç",
      goalPlaceholder: "Bu deneyimin amacı",
      contentLabel: "İçerik",
      contentPlaceholder: "Deneyim içeriği",
      statusLabel: "Durum",
      enabled: "Etkin",
      disabled: "Devre Dışı",
      cancel: "İptal",
      save: "Kaydet",
      delete: "Sil",
      undoChanges: "Değişiklikleri Geri Al",
      deleteExperience: "Deneyimi Sil",
      deleteConfirm: "Bu deneyimi silmek istediğinizden emin misiniz?",
      totalExperience: "Toplam {count} deneyim",
      tableTitle: "Başlık",
      tableContent: "İçerik",
      tableCreatedAt: "Oluşturulma Tarihi",
      tableStatus: "Durum",
      tableOperation: "İşlem",
      filterAll: "Tümü",
      deleteSuccess: "Silme başarılı",
      deleteFailed: "Silme başarısız",
      createSuccess: "Deneyim başarıyla eklendi",
      createFailed: "Deneyim ekleme başarısız",
      updateSuccess: "Güncelleme başarılı",
      updateFailed: "Güncelleme başarısız",
      updateFailedDataNotExist: "Güncelleme başarısız, mevcut veri bulunamadı",
      getDataError: "Veri alma hatası",
      detect: "Niyet Tespiti",
      plan: "Görev Planlama",
      action: "Görev Yürütme",
      sunday: "Pazar",
      monday: "Pazartesi",
      tuesday: "Salı",
      wednesday: "Çarşamba",
      thursday: "Perşembe",
      friday: "Cuma",
      saturday: "Cumartesi",
      earlier: "Daha önce"
    },
  },
  thinking: "Düşünüyor",
  task_error: "Görev anormal şekilde sonlandı",
  stop_task: "Görev durduruldu",
  jump_to_result: "Sonuca git",
  replay: "Tekrar oynat",
  task_finished: "Görev tamamlandı",
  task_playing: "Görev devam ediyor",
  click_here_to_go_to_settings: "Ayarlara gitmek için buraya tıkla",
}