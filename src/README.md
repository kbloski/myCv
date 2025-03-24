-Feature-Sliced Design FFD Structure

src/
├── app/
│   ├── store/                      # Globalny store, np. Redux, Zustand
│   └── providers/                  # Dostawcy globalni (np. contexty, zależności)
├── pages/           # Strony aplikacji (poziom najwyższy)
│   ├── HomePage/    
│   │   ├── index.tsx        # Strona główna
│   │   ├── HomePage.module.scss # Style specyficzne dla strony
│   │   ├── HomePage.test.tsx # Testy strony
│   ├── ProfilePage/  
│   │   ├── index.tsx
│   │   ├── ProfilePage.module.scss
│   ├── LoginPage/
│   │   ├── index.tsx
│   │   ├── LoginPage.module.scss
│   ├── NotFoundPage/
│   │   ├── index.tsx
│   │   ├── NotFoundPage.module.scss
├── features/                        # Główne funkcje aplikacji
│   ├── auth/                        # Funkcja logowania
│   │   ├── api/                     # Interakcje z API (np. logowanie, rejestracja)
│   │   ├── components/              # Komponenty specyficzne dla logowania
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/                   # Hooki związane z autoryzacją
│   │   ├── models/                  # Typy, interfejsy związane z logowaniem
│   │   ├── services/                # Usługi (np. logowanie, rejestracja)
│   │   └── ui/                      # UI specyficzne dla tej funkcji (np. formularze)
│   ├── search/                      # Funkcja wyszukiwania
│   │   ├── api/                     
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
├── entities/                        # Encje (modele danych, np. Użytkownicy, Produkty)
│   ├── user/                        # Encja użytkownika
│   │   ├── api/
│   │   ├── components/              
│   │   └── models/                 
│   └── product/                     # Encja produktu
│       ├── api/
│       ├── components/
│       └── models/
├── shared/                          # Wspólne, współdzielone elementy
│   ├── ui/                          # UI komponenty, np. buttony, modale
│   ├── hooks/                       # Wspólne hooki (np. useFetch, useLocalStorage)
│   ├── utils/                       # Funkcje pomocnicze (np. walidacje, formatowanie)
│   └── constants/                   # Stałe, np. statusy aplikacji, kody błędów
├── widgets/                         # Komponenty wspólnego użytku, które mogą być używane w różnych funkcjach
│   ├── Header/                      # Nagłówek, może być używany w wielu funkcjach
│   └── Sidebar/                     # Sidebar, podobnie jak Header
└── app.config.ts                    # Globalne ustawienia aplikacji







📌 Wyjaśnienie głównych warstw w Feature-Sliced Design (FSD)
W FSD aplikacja jest podzielona na warstwy, które organizują kod w sposób ułatwiający zarządzanie, skalowanie i rozwój. Oto dokładne omówienie poszczególnych sekcji features/, entities/, shared/ i widgets/.

🧩 1. features/ – Funkcjonalności aplikacji
Zawiera konkretne funkcje aplikacji, które wpływają na interakcję użytkownika.

Funkcja (feature) to moduł aplikacji, który realizuje jedno konkretne zadanie, np. logowanie, filtrowanie produktów, dodawanie do koszyka.

📁 Przykłady folderów w features/:

features/
├── auth/          # Logowanie i rejestracja użytkownika
├── search/        # Wyszukiwanie produktów
├── cart/          # Koszyk użytkownika
└── profile/       # Zarządzanie profilem użytkownika

📂 Struktura folderu auth/ (przykład):

auth/
├── api/            # Żądania do API (np. login, register)
│   ├── auth.api.ts
├── components/     # Komponenty specyficzne dla tej funkcji
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
├── hooks/         # Hooki powiązane z funkcją
│   ├── useAuth.ts
├── services/      # Logika biznesowa funkcji (np. autoryzacja)
│   ├── authService.ts
├── models/        # Interfejsy, typy danych
│   ├── auth.types.ts
└── ui/            # Stylizowane komponenty specyficzne dla funkcji
│   ├── AuthButton.tsx
✅ Zasady features/:

Każda funkcjonalność aplikacji to oddzielny folder.
Każdy folder zawiera wszystko, co dotyczy danej funkcji (komponenty, API, hooki, modele itp.).
Dzięki izolacji funkcji łatwo modyfikować i testować konkretne części aplikacji.
🏛️ 2. entities/ – Reprezentacja głównych jednostek biznesowych
Encje to centralne modele aplikacji – np. użytkownik, produkt, zamówienie.

Encja (entity) reprezentuje kluczowe jednostki biznesowe, które są używane w wielu miejscach aplikacji.

📁 Przykłady folderów w entities/:

entities/
├── user/         # Encja użytkownika
├── product/      # Encja produktu
├── order/        # Encja zamówienia

📂 Struktura folderu user/ (przykład):

user/
├── api/         # Operacje API dotyczące użytkownika (np. pobierz profil)
│   ├── user.api.ts
├── components/  # Komponenty związane z użytkownikiem (np. Avatar)
│   ├── UserAvatar.tsx
├── models/      # Definicje typów danych dla użytkownika
│   ├── user.types.ts
├── services/    # Logika związana z użytkownikiem (np. aktualizacja profilu)
│   ├── userService.ts
└── ui/          # UI powiązane z encją użytkownika
│   ├── UserCard.tsx
✅ Zasady entities/:

Encja ≠ Funkcja – Encje są uniwersalne i mogą być używane w wielu funkcjach.
Są one odpowiedzialne za przechowywanie, pobieranie i modyfikację danych.
Encje nie powinny zawierać interfejsu użytkownika (poza komponentami pomocniczymi, jak UserAvatar).
🔄 3. shared/ – Wspólne zasoby używane w całej aplikacji
Tutaj znajdują się komponenty i narzędzia wielokrotnego użytku.

📁 Przykłady folderów w shared/:

shared/
├── ui/          # Komponenty UI wielokrotnego użytku (np. Button, Modal)
├── hooks/       # Globalne hooki (np. useFetch, useLocalStorage)
├── utils/       # Funkcje pomocnicze (np. formatowanie dat)
├── constants/   # Stałe i konfiguracje (np. statusy zamówień)
📂 Struktura folderu ui/ (przykład):

mathematica

ui/
├── Button.tsx
├── Modal.tsx
└── Input.tsx
✅ Zasady shared/:

Komponenty, które mogą być używane w wielu miejscach aplikacji.
Brak logiki biznesowej – to tylko narzędzia!
Zawiera stałe wartości używane w wielu miejscach aplikacji.
🏗️ 4. widgets/ – Reużywalne komponenty UI zawierające logikę
Widgets to UI-elementy, które łączą logikę biznesową i interfejs.

📁 Przykłady folderów w widgets/:

widgets/
├── Header/     # Nagłówek aplikacji
├── Sidebar/    # Menu boczne
├── ProductCard/ # Karta produktu (UI + logika)
📂 Struktura folderu Header/ (przykład):


Header/
├── Header.tsx      # Główny komponent nagłówka
├── HeaderMenu.tsx  # Menu nawigacyjne
├── HeaderSearch.tsx # Pole wyszukiwania w nagłówku
└── index.ts
✅ Zasady widgets/:

To komponenty z logiką i interfejsem użytkownika.
Często składają się z kilku mniejszych komponentów.
Używane w wielu miejscach aplikacji, ale są bardziej rozbudowane niż shared/ui.
🔥 Podsumowanie
Warstwa	Cel	Przykłady
features/	Funkcjonalności aplikacji	Logowanie, wyszukiwanie, koszyk
entities/	Modelowanie danych biznesowych	Użytkownik, produkt, zamówienie
shared/	Komponenty, hooki, utils wielokrotnego użytku	Button, useFetch, stałe
widgets/	Komponenty UI zawierające logikę	Header, Sidebar, ProductCard
Dzięki temu podziałowi aplikacja jest: ✅ Modularna – każda funkcja działa niezależnie.
✅ Łatwa do skalowania – można dodawać nowe funkcje bez psucia starych.
✅ Łatwa w utrzymaniu – kod jest czytelny i dobrze zorganizowany.

Czy chcesz przykład kodu dla jednej z tych warstw? 😃