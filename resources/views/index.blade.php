@extends('theme.index')
@section('content')

<ul uk-tab>
    <li><a href="#">What</a></li>
    <li><a href="#">When</a></li>
    <li><a href="#">Where</a></li>
    <li><a href="#">Who</a></li>
</ul>

<!-- <ul class="uk-switcher uk-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul> -->
@if (session('success'))
    <div class="uk-alert-success" uk-alert>
        <p>Nice!</p>
    </div>
@endif

@if ($errors->any())
    <div class="uk-alert-danger" uk-alert>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form class="uk-form-stacked" action="/" method="POST">
    @csrf

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Title</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" name="title" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-form-controls">
            <textarea class="uk-textarea" name="description" placeholder="Add description"></textarea>
        </div>
    </div>
    <div class="datepicker-here" data-language='en'></div>

    <div class="uk-margin">
        <button class="uk-button uk-button-default uk-button-large">Previous</button>
        <button class="uk-button uk-button-primary uk-button-large">NExt</button>
    </div>
</form>
@stop
