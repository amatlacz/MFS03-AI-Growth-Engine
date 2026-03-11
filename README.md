# 🚀 Setup przed Zjazdem 2 – AI Growth Engine 2.0

> **Czas potrzebny:** ok. 30–45 minut  
> **Zrób to przed zajęciami** – na warsztatach od razu startujemy z kodem, nie z instalacją.

---

## Co będziemy robić na zajęciach?

Będziesz budować własną aplikację webową przy pomocy AI – bez konieczności znajomości programowania. Żeby to zadziałało, Twój komputer musi być gotowy do uruchamiania aplikacji **Next.js** lokalnie.

> 💡 *Next.js to po prostu "silnik" pod Twoją aplikację. Nie musisz go rozumieć – AI napisze kod, Ty go uruchomisz.*

---

## Krok 1 – Załóż konta (wszystkie są bezpłatne)

Zarejestruj się na każdej z poniższych platform. Użyj tego samego adresu e-mail wszędzie – będzie łatwiej.

| Narzędzie | Adres | Do czego służy |
|---|---|---|
| **GitHub** | [github.com](https://github.com) | Przechowywanie kodu |
| **Vercel** | [vercel.com](https://vercel.com) | Publikowanie aplikacji w internecie |
| **Bolt.new** | [bolt.new](https://bolt.new) | Tworzenie aplikacji przez AI (opcja A) |
| **Lovable** | [lovable.dev](https://lovable.dev) | Tworzenie aplikacji przez AI (opcja B) |

> ⚡ **Bolt.new czy Lovable?** Wybierz jedno – oba działają podobnie. Lovable ma nieco bardziej przyjazny interfejs, Bolt.new daje więcej kontroli. Możesz założyć oba konta i zdecydować na zajęciach.

---

## Krok 2 – Zainstaluj oprogramowanie

### 2a. Node.js (wymagany do uruchamiania aplikacji Next.js)

Node.js to środowisko uruchomieniowe dla aplikacji – bez niego Twój komputer nie "rozumie" kodu Next.js.

**➡️ Pobierz Node.js w wersji LTS (Long Term Support):**  
[https://nodejs.org](https://nodejs.org)

- Wybierz przycisk **"LTS"** (nie "Current")
- Pobierz instalator dla swojego systemu i przejdź przez kreator instalacji (klikaj "Next" / "Dalej")

**Weryfikacja instalacji:**

Po instalacji otwórz terminal i wpisz:

```bash
node --version
npm --version
```

Jeśli widzisz numery wersji (np. `v22.x.x` i `10.x.x`) – wszystko gra. ✅

---

### 2b. GitHub Desktop

Wizualny klient do zarządzania kodem – pobieranie repozytoriów jednym klikiem, bez wpisywania komend.

**➡️ Pobierz GitHub Desktop:**  
[https://desktop.github.com](https://desktop.github.com)

Po instalacji zaloguj się swoim kontem GitHub.

---

### 2c. Cursor

Edytor kodu z wbudowaną AI – tu będziesz pisać i edytować kod z pomocą asystenta.

**➡️ Pobierz Cursor:**  
[https://cursor.com](https://cursor.com)

- Kliknij **"Download"** – strona automatycznie wykryje Twój system
- Zainstaluj jak zwykłą aplikację
- Przy pierwszym uruchomieniu zaloguj się lub zarejestruj nowe konto

---

## Krok 3 – Instalacja zależności projektu (Next.js)

> ℹ️ Ten krok wykonujesz **po sklonowaniu repozytorium** w kroku 4. Opisujemy go tutaj z wyprzedzeniem, żebyś wiedział/a co czeka.

W terminalu Cursora, będąc w folderze projektu, wpisz:

```bash
npm install
```

Ta komenda pobiera wszystkie "klocki", z których zbudowana jest aplikacja. Może zająć chwilę – to normalne.

---

## Krok 4 – Test końcowy: uruchom przykładową aplikację

To jest Twój sprawdzian czy wszystko działa. Jeśli zobaczysz stronę w przeglądarce – jesteś gotowy/a na zajęcia. 🎉

### Krok po kroku:

**1. Sklonuj to repozytorium przez GitHub Desktop**

- Otwórz GitHub Desktop
- Kliknij `File` → `Clone repository...`
- Wybierz zakładkę **"URL"**
- Wklej adres tego repozytorium (skopiuj z paska przeglądarki lub użyj przycisku **"Code"** na stronie GitHub)
- Wybierz folder na dysku i kliknij **"Clone"**

**2. Otwórz projekt w Cursor**

- W GitHub Desktop kliknij **"Open in Cursor"**  
  *lub* w Cursor: `File` → `Open Folder...` → wskaż sklonowany folder

**3. Otwórz terminal w Cursor**

- W menu Cursora: `Terminal` → `New Terminal`  
  *lub* skrót klawiszowy:
  - **Mac:** `` Ctrl + ` ``
  - **Windows:** `` Ctrl + ` ``

**4. Zainstaluj zależności**

```bash
npm install
```

Poczekaj aż komenda się zakończy (może potrwać 1–2 minuty).

**5. Uruchom aplikację**

```bash
npm run dev
```

**6. Otwórz aplikację w przeglądarce**

Wejdź na: [http://localhost:3000](http://localhost:3000)

✅ **Widzisz moją stronę? Gratulacje – wszystko działa!**

---

## 🛠️ Troubleshooting – co robić gdy coś nie działa

### „node nie jest rozpoznawane jako polecenie" (Windows)

Node.js nie dodał się do PATH. Rozwiązania:
1. Uruchom ponownie komputer po instalacji Node.js
2. Jeśli to nie pomaga – odinstaluj Node.js i zainstaluj ponownie, zaznaczając opcję **"Add to PATH"** podczas instalacji

### „npm install" kończy się błędem

Sprawdź wersję Node.js – musi być **v18 lub nowsza**:
```bash
node --version
```
Jeśli masz starszą wersję, odinstaluj i zainstaluj Node.js LTS od nowa.

### Port 3000 jest zajęty

Jeśli `localhost:3000` nie działa, sprawdź w terminalu – Next.js podpowie inny port, np. `localhost:3001`.

### Cursor nie pokazuje opcji „Open in Cursor" w GitHub Desktop (Mac)

Otwórz Cursor ręcznie: `File` → `Open Folder...` → wskaż folder z repozytorium.

---

## Podsumowanie – lista kontrolna ✅

Przed zajęciami upewnij się, że masz:

- [ ] Konto na **GitHub**
- [ ] Konto na **Vercel**
- [ ] Konto na **Bolt.new** lub **Lovable** (albo oba)
- [ ] Zainstalowany **Node.js LTS** (`node --version` zwraca numer wersji)
- [ ] Zainstalowany **GitHub Desktop** (zalogowany kontem GitHub)
- [ ] Zainstalowany **Cursor**
- [ ] Sklonowane to repozytorium i działające na `localhost:3000`

---

> 💬 **Masz problem z instalacją?** Napisz na kanał grupy przed zajęciami – rozwiążemy to zanim zaczniemy, żeby nie tracić czasu na warsztatach.
