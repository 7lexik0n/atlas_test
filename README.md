# Atlas Functional Components

Тестовое задание для компании Атлас, в рамках которого были разработаны функциональные компоненты: кнопки, табы, поля ввода и счетчик. Все компоненты являются управляемыми, состояния вынесены во внешнее хранилище, реализованное с Redux Toolkit. Сборка прозводилась с поомщью Webpack (конфиг от CRA).

Использованные технологии: HTML, SASS, React, Redux Toolkit, TypeScript, Webpack.

## Использование

### Tabs

Компонент Tabs реализует табы, включает в себя следующие атрибуты:

| Атрибут  |                Тип                 |                                Описание                                 |
| :------: | :--------------------------------: | :---------------------------------------------------------------------: |
|   data   | `<{label: string; id: string;}>[]` |        Массив объектов, содержащих в себе id таба и его значение        |
|  value   |              `string`              |                            Id активного таба                            |
| onChange |     `(newId: string) => void`      | Функция для переопределения активного таба, принимает новое значение id |
| variant  |     `"primary" \| "secondary"`     |                         Вариант стилизации таба                         |
|  styles  |       `React.CSSProperties`        |           Необязательный параметр, для переопределения стилей           |

#### Пример:

```jsx
<Tabs
  data={components}
  value={activeTab}
  onChange={(newId) => dispatch(setActiveTab(newId))}
  variant="secondary"
/>
```

### Button

Компонент, реализующий кнопки. Может отображаться в различных визуальных стилях (`primary` и `secondary`), а также с эффектом недоступности (`disabled`) заполняющейся шкалы (`progress`) и фильтров (`filter`). включает в себя следующие атрибуты:

|   Атрибут    |                                       Тип                                        |                                                       Описание                                                       |
| :----------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
|   variant    | `"primary" \| "secondary" \| "round-primary" \| "round-secondary" \| "progress"` |                                                 Параметр стилизации                                                  |
|   subtitle   |                                     `string`                                     |                                        Подзаголовок, необязательный параметр                                         |
|   progress   |                                    `boolean`                                     |      Необязательный параметр, создающий экземпляр кнопки с эффектом заполняющейся шкалы (прогресс в секундах).       |
|    filter    |                                    `boolean`                                     |                        Необязательный параметр, создающий экземпляр кнопки с эффектом фильтра                        |
|   throbber   |                                    `boolean`                                     |                       Необязательный параметр, создающий экземпляр кнопки с эффектом загрузки                        |
|   disabled   |                                    `boolean`                                     |                     Необязательный параметр, создающий экземпляр кнопки с эффектом недоступности                     |
|    value     |                                     `number`                                     |         Необязательный параметр, текущее значение заполненной шкалы для соответствующей кнопки (в секундах)          |
|    total     |                                     `number`                                     |             Необязательный параметр, максимальное значение шкалы для соответствующей кнопки (в секундах)             |
|   filters    |                                     `number`                                     |                Необязательный параметр, текущее значение активных фильтров для соответствующей кнопки                |
| clickHandler |                                   `() => void`                                   | Необязательный параметр, функция, запускаемая при клике на кнопку. Для кнопок `disabled` и `throbber` не запускается |
|    styles    |                              `React.CSSProperties`                               |                                 Необязательный параметр, для переопределения стилей                                  |

#### Примеры:

```jsx
  <Button
    variant={variant}
    subtitle="Подзаголовок"
    disabled
  >
    Заголовок
  </Button>

  <Button
    variant="progress"
    progress
    value={progress}
    total={TOTAL_PROGRESS}
  >
    Заголовок
  </Button>

  <Button
    variant={variant}
    filter
    filters={1}
  >
    Фильтры
  </Button>
```

### Input

Компонент, реализующий управляемое поле ввода, поддерживвает валидацию. Может отображаться в различных визуальных стилях (`primary` и `secondary`), а также с эффектом недоступности (`disabled`). Включает в себя следующие атрибуты:

|    Атрибут     |                   Тип                    |                                         Описание                                          |
| :------------: | :--------------------------------------: | :---------------------------------------------------------------------------------------: |
|    variant     |       `"primary" \| "secondary" `        |                                    Параметр стилизации                                    |
|     value      |                 `string`                 |                                     Текущее значение                                      |
|    onChange    | `Dispatch<React.SetStateAction<string>>` |      Функция, запускаемая при изменении значения и переопределяющая текущее значение      |
|  placeholder   |                 `string`                 |                        Плейсхолдер инпута, необязательный параметр                        |
|     label      |                 `string`                 |       Необязательный параметр, отображающий поле для инпута с `variant="secondary"`       |
|    disabled    |                `boolean`                 |       Необязательный параметр, создающий экземпляр инпута с эффектом недоступности        |
|  validations   |     `<(value: string) => boolean>[]`     | Необязательный параметр, содержащий в себе массив функций для валидации текущего значения |
|  errorMessage  |                 `string`                 |           Необязательный параметр, сообщение выводимой при неудачной валидации            |
| successMessage |                 `string`                 |            Необязательный параметр, сообщение выводимой при удачной валидации             |
|     styles     |          `React.CSSProperties`           |                    Необязательный параметр, для переопределения стилей                    |

#### Примеры:

```jsx
  <Input
    variant={variant}
    placeholder="Текст"
    value={value}
    onChange={setValue}
    label="Custom"
  />

  <Input
    variant={variant}
    placeholder="Текст"
    value={value}
    onChange={setValue}
    validations={validations}
    errorMessage="Ошибка: Подпись к полю"
    successMessage="Успех: Подпись к полю"
  />

  <Input
    variant={variant}
    placeholder="Текст"
    value={valueDisabled}
    onChange={setValueDisabled}
    disabled
  />
```

### Counter

Компонент, реализующий управляемый счётчик, включает в себя следующие атрибуты:

|  Атрибут   |          Тип          |                      Описание                       |
| :--------: | :-------------------: | :-------------------------------------------------: |
|   label    |      `string" `       |     Необязательный параметр, заголовок счётчика     |
|   value    |       `string`        |                  Текущее значение                   |
| onIncrease |     `() => void`      | Функция, запускаемая при клике на кнопку увеличения |
| onDecrease |     `() => void`      | Функция, запускаемая при клике на кнопку уменьшения |
|   styles   | `React.CSSProperties` | Необязательный параметр, для переопределения стилей |

#### Примеры:

```jsx
<Counter
  label={label}
  value={value}
  onIncrease={() => dispatch(increaseCounter({ id, step: COUNTER_STEP }))}
  onDecrease={() => dispatch(decreaseCounter({ id, step: COUNTER_STEP }))}
/>
```

## Локальный запуск

Скопируйте репозиторий локально, после чего в корневой папке с проектом введите:

### `npm install`

Установит все требуемые для проекта зависимости.

### `npm run start`

Запустит проект в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

Страница будет перезагружаться при любых изменениях.

### `npm run build`

Соберет проект в папке `build`.\
Бандл будет собран в продакшн-режиме и оптимизирован для лучшей производительности, код минифицирован, а названия файлов включают в себя хэш.
