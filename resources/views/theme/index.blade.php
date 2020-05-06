<!doctype html>
<html>
<head>

    <title>DatePicker</title>

    <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
    <link rel="stylesheet" href="{{ URL::asset('css/datepicker.min.css') }}" />
    <link rel="stylesheet" href="{{ URL::asset('css/uikit.min.css') }}" />

</head>
<body>
    <header id="header">
        <div class="uk-tile uk-tile-primary">
            <p class="uk-h4">Datepicker</p>
        </div>
    </header>

    <div class="uk-container">
        <main id="main" class="row">
            <div class="uk-section uk-section uk-padding">
                @yield('content')
            </div>
        </main>

        <footer id="footer">
            Copyright &copy; Shahiem Seymor - 2020
        </footer>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> 
    <script src="{{ URL::asset('js/app.js') }}"></script>
</body>
</html>
